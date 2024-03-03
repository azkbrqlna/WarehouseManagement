<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Rental;
use App\Models\Returning;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    public function index()
    {
        $player = Auth::id();

        $user = Auth::user();
        $username = $user->username;
        $words = explode(' ', $username);
        $initial = '';
        foreach ($words as $word) {
            $initial .= Str::upper(Str::substr($word, 0, 1));
        }
        return Inertia::render("Home/index", [
            'rental_count' => Rental::where('user_id',$player)->where('status',1)->count(),
            'return_count' => Returning::where('user_id',$player)->where('status',1)->count(),
            'initial' => $initial,
        ]);
    }

    public function landing()
    {
        return Inertia::render("Home/landing");
    }
}
