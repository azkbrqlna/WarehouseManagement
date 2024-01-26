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
            'returns' => Returning::where('status', false)->where('photo', '!=', null)->with(['item', 'user'])->get(),
        ]);
    }

    public function acceptReturn(Request $request,$id)
    {
        $return = Returning::find($request->id);
        $return->actual_return_date = Carbon::now('Asia/Jakarta')->toDateTimeString();
        $return->status = true;
        $return->save();

        $logData = Log::find($request->id);
        $logData->photo = $return->photo;
        $logData->actual_return_date = $return->actual_return_date;
        $logData->save();
        
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

        $existingReturn = Returning::where('rent_date', $request->rent_date)->where('item_id', $request->item_id)->first();
        $existingReturn->update([
            'photo' => $newName,
        ]);

        return redirect('/pengembalian');
    }
}
