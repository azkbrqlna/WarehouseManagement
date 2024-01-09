<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Dashboard\ItemController;
use App\Http\Controllers\Dashboard\RequestController;
use App\Http\Controllers\Dashboard\UserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RentalController;
use App\Http\Controllers\ReturnController;
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
    Route::get("/dashboard", [DashboardController::class, "index"])->middleware('only_admin');
    Route::get("/home", [HomeController::class, "index"]);
});

Route::controller(AuthController::class)->middleware('guest')->group(function () {
    Route::get('/', 'login')->name('login');
    Route::post('/', 'authenticate');
    Route::get('/register', 'register')->name('register');
    Route::post('/register', 'signup');
    Route::get('/logout', 'logout')->withoutMiddleware('guest')->middleware('auth');
});

Route::controller(UserController::class)->middleware('auth')->group(function () {
    Route::middleware('only_admin')->group(function () {
        Route::get('/users', 'index');
        Route::get('/user/create', 'create');
        Route::post('/user/create', 'store');
        Route::delete('/user/{slug}', 'destroy');
    });
});

Route::controller(ItemController::class)->middleware('auth')->group(function () {
    Route::middleware('only_admin')->group(function () {
        Route::get('/items', 'index');
        Route::get('/item/create', 'create');
        Route::post('/item/create', 'store');
        Route::delete('/item/{slug}', 'destroy');
        Route::patch('/items/{id}', 'update');
    });
});

Route::controller(RentalController::class)->middleware('auth')->group(function () {
    Route::get('/peminjaman', 'indexUser');
    Route::post('/peminjaman', 'storeUser');
    Route::get('/request', 'indexAdmin')->middleware('only_admin');
});

Route::controller(ReturnController::class)->middleware('auth')->group(function () {
    Route::get('/pengembalian', 'index');
});
