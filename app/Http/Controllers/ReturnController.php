<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Rental;
use App\Models\Returning;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use PhpParser\Node\Stmt\Return_;

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

        return redirect('/request/return');
    }

    public function rejectReturn(Request $request)
    {
        $return = Returning::find($request->id);
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
        ]);
    }

    public function storeUser(Request $request)
    {
        $request->validate([
            'photo' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048'
        ]);

        if ($request->file("photo")) {
            $extension = $request->file("photo")->getClientOriginalExtension();
            $newName = strtolower($request->name) . '-' . now()->timestamp . '.' . $extension;
            Storage::disk('public')->putFileAs('photos', $request->file("photo"), $newName);
            $request['photos'] = $newName;
        };

        Returning::create([
            'user_id' => auth()->id(),
            'item_id' => $request->item_id,
            'photo' => $newName,
        ]);

        return redirect('/pengembalian');
    }
}
