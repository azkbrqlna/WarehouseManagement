<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Rental;
use App\Models\Returning;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        return Inertia::render("Home/index", [
            'rental_count' => Rental::where('status', '!=', 1)->count(),
            'return_count' => Returning::where('status', '!=', 1)->whereNotNull('photo')->count(),
        ]);
    }
    public function landing(){
        return Inertia::render("Home/landing");
    }
}
