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

class ReturnController extends Controller
{
    //for Admin
    public function returnAdmin()
    {
        return Inertia::render("Dashboard/Request/Return/index", [
            'returns' => Returning::where('status', false)->with(['item', 'user'])->get(),
        ]);
    }

    public function acceptReturn(Request $request)
    {
        $return = Returning::find($request->id);
        $return->actual_return_date = Carbon::now()->toDateString();
        $return->status = true;
        $return->save();

        $log = Log::find($request->id);
        $log->actual_return_date = $return->actual_return_date;
        $log->photo = $return->photo;
        $log->save();

        // $rental = Rental::where('user_id', $return->user_id)
        //     ->where('item_id', $return->item_id)
        //     ->first();

        // // if ($return->status && $rental) {
        // //     Log::create([
        // //         'user_id' => auth()->id(),
        // //         'item_id' => $rental->item_id,
        // //         'reason' => $rental->reason,
        // //         'rent_date' => $rental->rent_date,
        // //         'return_date' => $rental->return_date,
        // //         'photo' => $return->photo,
        // //         'actual_return_date' => $return->actual_return_date,
        // //     ]);
        // // }
        // if ($return->status && $rental) {
        //     $log = Log::find($request->id);
        //     $log->photo = $return->photo;
        //     $log->actual_return_date = $return->actual_return_date;
        //     $log->save();
        // }
        return redirect('/request/return');
    }

    public function rejectReturn($id)
    {
        $return = Returning::find($id);
        Storage::delete('photos/' . $return->photo);
        $return->delete();
        return redirect('/request/return');
    }

    //For User
    public function indexUser()
    {
        $user = auth()->id();
        return Inertia::render("Pengembalian/index", [
            'rentals' => Rental::with(['item', 'user'])->where('user_id', $user)->get(),
            'returns' => Returning::all(),
            'items' => Item::all()
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
        ;

        Returning::create([
            'user_id' => auth()->id(),
            'item_id' => $request->item_id,
            'photo' => $newName,
        ]);

        return redirect('/pengembalian');
    }
}
