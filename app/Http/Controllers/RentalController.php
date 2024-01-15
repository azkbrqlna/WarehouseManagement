<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Rental;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RentalController extends Controller
{
    //for admin
    public function indexAdmin()
    {
        return Inertia::render("Dashboard/Request/index");
    }

    public function rentalAdmin()
    {
        return Inertia::render("Dashboard/Request/Rental/index", [
            'rentals' => Rental::with(['item', 'user'])->get(),
            'rental_count' => Rental::count(),
        ]);
    }

    public function acceptRental(Request $request){
        $rental = Rental::find($request->id);
        $rental->status = true;
        $rental->save();

        return redirect()->back()->with('success','Request accepted!');
    }

    public function rejectRental(Request $request){
        $rental = Rental::find($request->id);
        $rental->delete();
        return redirect()->back()->with('success','Request rejected!');
    }

    public function returnAdmin()
    {
        return Inertia::render("Dashboard/Request/Return/index");
    }

    //for user
    public function indexUser()
    {
        return Inertia::render("Peminjaman/index", [
            'items' => Item::all()
        ]);
    }

    public function storeUser(Request $request)
    {
       $validated =$request->validate([
            'reason' => 'required',
        ]);
        Rental::create([
            'user_id' => auth()->id(),
            'item_id' => $request->item_id,
            'reason' => $request->reason,
        ]);
        return redirect('/peminjaman')->with('success', 'Tunggu Admin menyetujui!');
    }
}
