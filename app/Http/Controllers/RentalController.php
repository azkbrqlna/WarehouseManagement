<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Rental;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RentalController extends Controller
{

    public function indexAdmin(){
        return Inertia::render("Dashboard/Request/index",[
            'rentals' => Rental::all(),
        ]);
    }
    public function indexUser()
    {
        return Inertia::render("Peminjaman/index", [
            'items' => Item::all()
        ]);
    }

    public function storeUser(Request $request){
        $this->validate($request, [
            'reason' => 'required'
        ]);

        Rental::create($request->all());
    }
}
