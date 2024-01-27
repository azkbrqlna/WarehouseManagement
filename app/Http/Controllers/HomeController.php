<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        return Inertia::render("Home/index");
    }
    public function landing(){
        return Inertia::render("Home/landing");
    }
}
