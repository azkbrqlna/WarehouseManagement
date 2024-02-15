<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Dashboard\ItemController;
use App\Http\Controllers\Dashboard\UserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RentalController;
use App\Http\Controllers\ReturnController;
use GuzzleHttp\Middleware;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['auth'])->group(function () {
    
    Route::get("/home", [HomeController::class, "index"])->middleware('only_user');
    Route::get("/",[HomeController::class, "landing"])->withoutMiddleware('auth');
});

Route::controller(AuthController::class)->middleware('guest')->group(function () {
    Route::get('/login', 'login')->name('login');
    Route::post('/login', 'authenticate');
    Route::get('/register', 'register')->name('register');
    Route::post('/register', 'signup');
    Route::get('/logout', 'logout')->withoutMiddleware('guest')->middleware('auth');
});

Route::controller(DashboardController::class)->middleware('auth')->group(function () {
    Route::middleware('only_admin')->group(function(){
        Route::get("/dashboard","index"); 
        Route::get("/dashboard/export","exportExcel");
    }); 
});

Route::controller(UserController::class)->middleware('auth')->group(function () {
    Route::middleware('only_admin')->group(function () {
        Route::get('/users', 'index');
        Route::get('/users', 'create');
        Route::post('/users', 'store');
        Route::delete('/user/{slug}', 'destroy');
    });
});

Route::controller(ItemController::class)->middleware('auth')->group(function () {
    Route::middleware('only_admin')->group(function () {
        Route::get('/items', 'index');
        Route::get('/items', 'create');
        Route::post('/items', 'store');
        Route::delete('/item/{slug}', 'destroy');
        Route::patch('/item/{id}', 'update');
    });
});

Route::controller(RentalController::class)->middleware('auth')->group(function () {
    Route::middleware('only_user')->group(function(){
        Route::get('/peminjaman', 'indexUser');
        Route::post('/peminjaman', 'storeUser');
    });
    Route::middleware('only_admin')->group(function () {
        // Route::get('/requests', 'indexAdmin');
        Route::get('/request/rental', 'rentalAdmin');
        Route::patch('/request/rental/{id}', 'acceptRental');
        Route::delete('/request/rental/{id}', 'rejectRental');
    });
});

Route::controller(ReturnController::class)->middleware('auth')->group(function () {
    Route::middleware('only_user')->group(function(){
        Route::get('/pengembalian', 'indexUser');
        Route::post('/pengembalian', 'storeUser');
    });
    Route::middleware('only_admin')->group(function(){
        Route::get('/request/return', 'returnAdmin');
        Route::patch('/request/return/{id}', 'acceptReturn');
        Route::delete('/request/return/{id}', 'rejectReturn');
    });
});
