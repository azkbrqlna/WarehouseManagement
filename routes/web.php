<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Dashboard\ItemController;
use App\Http\Controllers\Dashboard\RequestController;
use App\Http\Controllers\Dashboard\UserController;
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
Route::middleware(['auth'])->group(function () {
    Route::get("/dashboard", [DashboardController::class, "index"])->middleware('only_admin');
    Route::get("/home", [HomeController::class, "index"]);
    Route::get('/peminjaman', [PeminjamanController::class, 'index']);
    Route::get('/pengembalian', [PengembalianController::class, 'index']);
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
        Route::get('/users/create', 'create');
        Route::post('/users/create', 'store');
        Route::delete('/users/{slug}', 'destroy');
    });
});

Route::controller(ItemController::class)->middleware('auth')->group(function () {
    Route::middleware('only_admin')->group(function () {
        Route::get('/items', 'index');
        Route::get('/items/create', 'create');
        Route::post('/items/create', 'store');
        Route::delete('/items/{slug}', 'destroy');
    });
});

Route::controller(RequestController::class)->middleware('auth')->group(function () {
    Route::get('/request', 'index');
});

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';