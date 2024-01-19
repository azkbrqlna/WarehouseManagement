<?php

namespace App\Http\Controllers;

use App\Models\Rental;
use App\Models\Returning;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ReturnController extends Controller
{
    //for Admin
    public function returnAdmin()
    {
        return Inertia::render("Dashboard/Request/Return/index");
    }

    //For User
    public function indexUser()
    {
        $user = auth()->user();
        // dd(Rental::with('user','item')->where('user_id', $user->id)->get());
        return Inertia::render("Pengembalian/index",[
            'user' => $user,
            'returns' => Rental::with('user','item')->where('user_id', $user->id)->get(),
        ]);
    }

    public function storeUser(Request $request){
        $request->validate([
            'photo' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048'
        ]);

        if ($request->file("photo")) {
            $extension = $request->file("photo")->getClientOriginalExtension();
            $newName = strtolower($request->name) . '-' . now()->timestamp . '.' . $extension;

            Storage::disk('public')->putFileAs('photos', $request->file("photo"), $newName);
            $request['photos'] = $newName;
        };

        $request['actual_return_date'] = Carbon::now()->toDateString();
        Returning::create([
            'user_id' => auth()->id(),
            'item_id' => $request->item_id,
            'actual_return_date' => $request->actual_return_date
        ]);

        return redirect('/pengembalian');
    }

}
