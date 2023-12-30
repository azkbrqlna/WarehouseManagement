<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Item;
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
        $userCount = User::count();
        $itemCount = Item::count();
        return Inertia::render("Dashboard/index",[
            "user_count"=> $userCount,
            "item_count"=> $itemCount,
        ]);
    }

}
