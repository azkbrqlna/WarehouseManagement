<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{

    //untuk tampilan login
    public function login()
    {
        return Inertia::render("Index");
    }

    //untuk validasi saat login
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'username' => ['required'],
            'nis' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            //regenerate session
            $request->session()->regenerate();
            if (Auth::user()->role_id == 1) {
                return redirect('/dashboard');
            }
            if (Auth::user()->role_id == 2) {
                return redirect('/home');
            }

        }
    }

    public function register(){
        return Inertia::render("Register");
    }

    //untuk validasi register
    public function registering()
    {

    }


    //untuk logout
    public function logout(string $id)
    {
        //
    }
}
