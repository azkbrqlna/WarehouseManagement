<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Dashboard\ItemController;
use App\Http\Controllers\Dashboard\UserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PengambilanController;
use App\Http\Controllers\RentalController;
use App\Http\Controllers\ReturnController;
use App\Http\Controllers\RiwayatController;
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
Route::get("/about", [AboutController::class, "index"])->middleware('only_user');

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
        Route::post('/users', 'store');
        Route::delete('/user/{id}', 'destroy');
        Route::put('/user/{id}', 'editUser'); 
    });
});

Route::controller(ItemController::class)->middleware('auth')->group(function () {
    Route::middleware('only_admin')->group(function () {
        Route::get('/items', 'index');
        Route::post('/items', 'store');
        Route::delete('/item/{id}', 'destroy');
        Route::put('/item/{id}', 'editItem');
        Route::patch('/item/{id}', 'update');
    });
});

Route::controller(RentalController::class)->middleware('auth')->group(function () {
    Route::middleware('only_user')->group(function(){
        Route::get('/peminjaman', 'indexUser');
        Route::post('/peminjaman', 'storeUser');
    });
    Route::middleware('only_admin')->group(function () {
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

Route::controller(PengambilanController::class)->middleware('auth')->group(function () {
    Route::middleware('only_user')->group(function(){
        Route::get('/pengambilan', 'indexUser');
        Route::post('/pengambilan', 'storeUser');
    });
    Route::middleware('only_admin')->group(function () {
        Route::get('/request/pickup', 'rentalAdmin');
        Route::patch('/request/pickup/{id}', 'acceptPickup');
        Route::delete('/request/pickup/{id}', 'rejectPickup');
    });
});

Route::middleware(['auth'])->group(function () {
    Route::get("/riwayat", [RiwayatController::class, "index"])->middleware('only_user');
});