<?php

namespace App\Http\Controllers\Dashboard;

use App\Exports\ExportLogs;
use App\Http\Controllers\Controller;
use App\Models\Log;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class LogController extends Controller
{
    public function index(){
        return Inertia::render("Dashboard/Logs/index", [
            'logs' => Log::with(['item', 'user'])->latest()->paginate(6),
        ]);
    }

    //buat download excel
    public function exportExcel(){
        //return Excel::download(new ExportLogs, 'logs.xlsx');
        return (new ExportLogs)->download('logs-'.Carbon::now()->toDateString().'.xlsx');
    }
}
