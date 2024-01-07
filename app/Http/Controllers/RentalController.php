<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RentalController extends Controller
{
    public function index()
    {
        return Inertia::render("Peminjaman/index", [
            'items' => Item::all()
        ]);
    }
}
