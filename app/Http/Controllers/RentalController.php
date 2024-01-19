<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Rental;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RentalController extends Controller
{
    //for admin
    public function indexAdmin()
    {
        return Inertia::render("Dashboard/Request/index", [
            'request' => Rental::where('status', true)->get()
        ]);
    }

    public function rentalAdmin()
    {
        return Inertia::render("Dashboard/Request/Rental/index", [
            'rentals' => Rental::where('status', false)->with(['item', 'user'])->get(),
            'rental_count' => Rental::count(),
        ]);
    }

    public function acceptRental(Request $request)
    {
        $rental = Rental::find($request->id);
        $rental->status = true;
        $rental->save();

        return redirect('/request/rental');
    }

    public function rejectRental(Request $request)
    {
        $rental = Rental::find($request->id);
        $rental->delete();
        return redirect('/request/rental');
    }

    //for user
    public function indexUser()
    {
        return Inertia::render("Peminjaman/index", [
            'items' => Item::all(),
            'rentals' => Rental::with(['item', 'user'])->get(),
        ]);
    }

    public function storeUser(Request $request)
    {
        $request['rent_date'] = Carbon::now()->toDateString();
        $request['return_date'] = Carbon::now()->addDays(7)->toDateString();

        $request->validate([
            'reason' => 'required',
        ]);
        $request['rent_date'] = Carbon::now()->toDateString();
        $request['return_date'] = Carbon::now()->addDays(7)->toDateString();
        Rental::create([
            'user_id' => auth()->id(),
            'item_id' => $request->item_id,
            'reason' => $request->reason,
            'rent_date' => $request->rent_date,
            'return_date' => $request->return_date,    
        ]);
        return redirect('/peminjaman');
    }
}
