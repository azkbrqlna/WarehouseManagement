<?php

use App\Http\Controllers\Authentication\AuthController;
use App\Http\Controllers\Authentication\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PeminjamanController;
use App\Http\Controllers\PengembalianController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::middleware(['guest'])->group(function () {
    Route::get('/', [AuthController::class,'login'])->name('login');
    Route::post('/', [AuthController::class,'authenticate']);   
    Route::get('/register',[AuthController::class ,'register'] );
    Route::post('/register',[AuthController::class ,'signup'] );
});


Route::middleware(['auth'])->group(function () {
    Route::get("/dashboard",[DashboardController::class, "index"])->middleware('only_admin');
    Route::get("/home",[HomeController::class,"index"])->middleware('only_user');
    Route::get('/logout',[AuthController::class ,'logout'] );
    Route::get('/peminjaman',[PeminjamanController::class,'index'] );
    Route::get('/pengembalian',[PengembalianController::class,'index'] );
});

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';