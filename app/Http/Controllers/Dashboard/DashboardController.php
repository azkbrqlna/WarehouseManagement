<?php

namespace App\Http\Controllers\Dashboard;

use App\Exports\ExportLogs;
use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Models\Log;
use App\Models\Rental;
use App\Models\Returning;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render("Dashboard/index", [
            'user_all' => User::where('role_id', 2)->count(),
            'user_rental' => Rental::where('status', 1)->count(),
            'item_all' => Item::count(),
            'item_available' => Item::where('status', 1)->count(),
            'item_notAvailable' => Item::where('status', 0)->count(),
            'logs_count' => Log::count(),
            'rental_all' => Rental::where('status',1)->count(),
            'return_all' => Returning::where('status',1)->count(),
            'rental_count' => Rental::where('status', 0)->count(),
            'return_count' => Returning::where('status',0)->count(),
            'logs' => Log::with(['item', 'user'])->paginate(6),
        ]);
        
    }
    //buat download excel
    public function exportExcel()
    {
        //return Excel::download(new ExportLogs, 'logs.xlsx');
        return (new ExportLogs)->download('logs-' . Carbon::now()->toDateString() . '.xlsx');
    }
}
