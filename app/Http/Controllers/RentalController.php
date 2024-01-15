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
        ]);
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
        $request->validate([
            'reason' => 'required',
            'item_id' => 'required',
        ]);

        $requestData = [
            'user_id' => auth()->id(),
            'item_id' => $request->item_id,
            'reason' => $request->reason,
        ];

        Rental::create($requestData);
        return redirect()->back()->with('success', 'Tunggu Admin menyetujui!');
    }
}
