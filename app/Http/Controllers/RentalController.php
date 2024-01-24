<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Rental;
use App\Models\Returning;
use App\Models\Log;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RentalController extends Controller
{
    //for admin
    public function indexAdmin(Request $request)
    {
        return Inertia::render("Dashboard/Request/index", [
            // 'rental_log' => Rental::where('status', true)->get(),
            // 'return_log' => Returning::where('status', true)->with(['item', 'user'])->get(),
            'logs' => Log::with(['item', 'user'])->get(),
            'rental_count' => Rental::count(),
            'return_count' => Returning::count(),
        ]);
    }

    public function rentalAdmin()
    {
        return Inertia::render("Dashboard/Request/Rental/index", [
            'rentals' => Rental::where('status', false)->with(['item', 'user'])->get(),
        ]);
    }

    public function acceptRental(Request $request)
    {
        $request->validate([
            'reason' => 'required',
        ]);
        $rental = Rental::find($request->id);
        $rental->status = true;
        Log::create([
            'user_id' => auth()->id(),
            'item_id' => $request->item_id,
            'reason' => $request->reason,
            'rent_date' => $request->rent_date,
            'return_date' => $request->return_date,
        ]);
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
        $item = Item::find($request->item_id);
        // $item->amount -= $request->amount;
        $item->save();

        return redirect('/peminjaman');
    }
}
