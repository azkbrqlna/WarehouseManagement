<?php

namespace App\Http\Controllers;

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
        $user = auth()->user();
        return Inertia::render("Dashboard/Request/Return/index", [
            'user' => $user,
            'returns' => Returning::all(),
        ]);
    }

    //For User
    public function indexUser()
    {
        $user = auth()->user();
        return Inertia::render("Pengembalian/index", [
            'user' => $user,
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

        $request['actual_return_date'] = Carbon::now()->toDateString();
        Returning::create([
            'user_id' => auth()->id(),
            'item_id' => $request->item_id,
            'photo' => $newName,
            'actual_return_date' => $request->actual_return_date
        ]);

        return redirect('/pengembalian');
    }
}
