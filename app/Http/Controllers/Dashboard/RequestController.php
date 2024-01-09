<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RequestController extends Controller
{
    public function index(){
        return Inertia::render("Dashboard/Request/index");
    }

    public function rental(){
        return Inertia::render("Dashboard/Request/Rental/index");
    }
    
    public function return(){
        return Inertia::render("Dashboard/Request/Return/index");
    }

}
