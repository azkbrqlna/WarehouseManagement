<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Models\Log;
use App\Models\Pickup;
use App\Models\Rental;
use App\Models\Returning;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PengambilanController extends Controller
{
    public function rentalAdmin()
    {
        return Inertia::render("Dashboard/Request/Pengambilan/index", [
            'pickups' => Pickup::where('status', false)->with(['item', 'user'])->paginate(10),
            'users' => User::all(),
            'items' => Item::all(),
        ]);
    }

    public function acceptPickup(Request $request)
    {
        $request->validate([
            'reason' => 'required',
        ]);

        $pickup = Pickup::find($request->id);
        $item = Item::find($request->item_id);
        $pickup->pickup_date_received = Carbon::now('Asia/Jakarta')->toDateTimeString();

        // Mengurangi stok barang
        $item->total_item -= $pickup->amount_pickup;
        $item->save();

        // Mengubah status penyewaan
        $pickup->status = true;
        $pickup->save();
        if ($item->total_item <= 0) {
            Pickup::where('item_id', $request->item_id)->where('status', false)->delete();
            $item->status = false;
            $item->save();
        }

        // Membuat log
        Log::create([
            'user_id' => $request->user_id,
            'item_id' => $request->item_id,
            'reason' => $request->reason,
            'amount_pickup' => $pickup->amount_pickup,
            'pickup_date' => $pickup->pickup_date,
            'pickup_date_received' => $pickup->pickup_date_received,
            'type' => 'pengambilan',
        ]);

        return redirect('/request/pickup');
    }

    public function rejectPickup(Request $request)
    {
        $rental = Pickup::find($request->id);
        $rental->delete();
        return redirect('/request/pickup');
    }

    //for user
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
        return Inertia::render("Pengambilan/index", [
            'items' => Item::all(),
            'pickups' => Pickup::with(['item', 'user'])->get(),
            'rental_count' => Rental::where('user_id', $player)->where('status', 1)->count(),
            'return_count' => Returning::where('user_id', $player)->where('status', 1)->count(),
            'initial' => $initial
        ]);
    }

    public function storeUser(Request $request)
    {
        $request->validate([
            'reason' => 'required',
            'amount_pickup' => 'required',
        ]);
        $request['pickup_date'] = Carbon::now('Asia/Jakarta')->toDateTimeString();
        Pickup::create([
            'user_id' => auth()->id(),
            'item_id' => $request->item_id,
            'reason' => $request->reason,
            'amount_pickup' => $request->amount_pickup,
            'pickup_date' => $request->pickup_date,
        ]);

        return redirect('/pengambilan');
    }
}
