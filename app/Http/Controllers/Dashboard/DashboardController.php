<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Models\Log;
use App\Models\Rental;
use App\Models\Returning;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rental_count = Rental::where('status', '!=', 1)->count();
        $return_count = Returning::where('status', '!=', 1)->whereNotNull('photo')->count();
        $total =$rental_count + $return_count;
        return Inertia::render("Dashboard/index",[
            "user_count"=> User::where('role_id',2)->count(),
            "item_count"=> Item::count(),
            "logs_count"=> Log::count(),
            'rental_count' => $rental_count,
            'return_count' => $return_count,
            'total' => $total
        ]);
    }

}
