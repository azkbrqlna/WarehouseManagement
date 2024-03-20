<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Rental;
use App\Models\Returning;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use PhpParser\Node\Stmt\Return_;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ReturnController extends Controller
{
    //for Admin
    public function returnAdmin()
    {
        return Inertia::render("Dashboard/Request/Return/index", [
            'returns' => Returning::where('status', 0)->whereNotNull('photo')->with(['item', 'user'])->paginate(10),
        ]);
    }

    public function acceptReturn(Request $request)
    {
        // Menandai pengembalian barang
        $return = Returning::find($request->id);
        $return->actual_return_date = Carbon::now('Asia/Jakarta')->toDateTimeString();
        $return->status = true;
        $return->save();

        // Menambahkan kembali stok barang
        $rental = Log::find($request->id);
        $item = Item::where('id', $rental->item_id)->first();
        $amount = Returning::find($request->item_id);
        $item->total_item += $amount->amount_return;
        $item->status = true;
        $item->save();

        // Memperbarui log dengan informasi pengembalian
        $logData = Log::find($request->id);
        $logData->update([
            'photo' => $return->photo,
            'actual_return_date' => $return->actual_return_date,
        ]);
        return redirect('/request/return');
    }

    public function rejectReturn($id)
    {
        $return = Returning::find($id);
        Storage::delete('photos/' . $return->photo);
        $return->update([
            'photo' => null,
            'actual_return_date' => null,
        ]);

        return redirect('/request/return');
    }

    //For User
    public function indexUser()
    {
        $player = Auth::id();
        $user = Auth::user();
        $username = $user->username;
        $words = explode(' ', $username);
        $initials = array_map(function ($word) {
            return strtoupper(substr($word, 0, 1));
        }, $words);
        $initial = implode('', $initials);
        $initial = substr($initial, 0, 3);
        return Inertia::render("Pengembalian/index", [
            'rentals' => Rental::with(['item', 'user'])->get(),
            'returns' => Returning::with(['item'])->get(),
            'items' => Item::all(),
            'rental_count' => Rental::where('user_id', $player)->where('status', 1)->count(),
            'return_count' => Returning::where('user_id', $player)->where('status', 1)->count(),
            'initial' => $initial,
        ]);
    }

    public function storeUser(Request $request)
    {
        $request->validate([
            'photo' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        ]);

        if ($request->file("photo")) {
            $extension = $request->file("photo")->getClientOriginalExtension();
            $newName = strtolower($request->item_id) . '-' . now()->timestamp . '.' . $extension;
            Storage::disk('public')->putFileAs('photos', $request->file("photo"), $newName);
            $request['photos'] = $newName;
        }

        $existingReturn = Returning::where('rent_date', $request->rent_date)->where('item_id', $request->item_id)->first();
        $existingReturn->update([
            'photo' => $newName,
        ]);

        return redirect('/pengembalian');
    }
}
