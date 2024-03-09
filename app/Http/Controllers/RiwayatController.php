<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Log;
use App\Models\Rental;
use App\Models\Returning;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class RiwayatController extends Controller
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
        return Inertia::render("Riwayat/index", [
            'rental_count' => Rental::where('user_id', $player)->where('status', 1)->count(),
            'return_count' => Returning::where('user_id', $player)->where('status', 1)->count(),
            'initial' => $initial,
            'logs' => Log::with(['item', 'user'])->get(),
        ]);
    }
}
