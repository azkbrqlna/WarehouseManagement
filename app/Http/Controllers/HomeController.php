<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Rental;
use App\Models\Returning;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
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
        return Inertia::render("Home/index", [
            'rental_count' => Rental::where('user_id', $player)->where('status', 1)->count(),
            'return_count' => Returning::where('user_id', $player)->where('status', 1)->count(),
            'initial' => $initial,
        ]);
    }

    public function landing()
    {
        return Inertia::render("Home/landing");
    }
}
