<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Rental;
use App\Models\Returning;
use App\Models\Log;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

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
            'rentals' => Rental::where('status', false)->with(['item', 'user'])->paginate(10),
            'users' => User::all(),
        ]);
    }

    public function acceptRental(Request $request)
    {
        $request->validate([
            'reason' => 'required',
        ]);

        $rental = Rental::find($request->id);
        $item = Item::find($request->item_id);

        if ($rental->amount_rental > $item->total_item) {
            dd('error');
            return redirect('/request/rental');
        }else {
            // Mengurangi stok barang
            $item->total_item -= $rental->amount_rental;
            $item->save();

            // Mengubah status penyewaan
            $rental->status = true;
            $rental->save();

            // Membuat log
            Log::create([
                'user_id' => $request->user_id,
                'item_id' => $request->item_id,
                'reason' => $request->reason,
                'amount_rental' => $rental->amount_rental,
                'rent_date' => $request->rent_date,
                'return_date' => $request->return_date,
            ]);

            // Membuat data pengembalian
            Returning::create([
                'user_id' => $request->user_id,
                'item_id' => $request->item_id,
                'amount_return' => $rental->amount_rental,
                'rent_date' => $request->rent_date,
            ]);
            return redirect('/request/rental');
        }
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
        $player = Auth::id();
        $user = Auth::user();
        $username = $user->username;
        $words = explode(' ', $username);
        $initial = '';
        foreach ($words as $word) {
            $initial .= Str::upper(Str::substr($word, 0, 1));
        }
        return Inertia::render("Peminjaman/index", [
            'items' => Item::all(),
            'rentals' => Rental::with(['item', 'user'])->get(),
            'rental_count' => Rental::where('user_id',$player)->where('status',1)->count(),
            'return_count' => Returning::where('user_id',$player)->where('status',1)->count(),
            'initial' => $initial
        ]);
    }

    public function storeUser(Request $request)
    {
        $request->validate([
            'reason' => 'required',
            'amount_rental' => 'required',
        ]);
        $request['rent_date'] = Carbon::now('Asia/Jakarta')->toDateTimeString();
        $request['return_date'] = Carbon::now()->addDays(7)->toDateString();
        Rental::create([
            'user_id' => auth()->id(),
            'item_id' => $request->item_id,
            'reason' => $request->reason,
            'amount_rental' => $request->amount_rental,
            'rent_date' => $request->rent_date,
            'return_date' => $request->return_date,
        ]);
        // $item = Item::find($request->item_id);
        // $item->total_item -= $request->amount_rental;
        // $item->save();

        return redirect('/peminjaman');
    }
}
