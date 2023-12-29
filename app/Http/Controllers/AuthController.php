<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
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

            return back()->with('error','Login gagal pastikan mengisi credential dengan benar');

        }
    }

    public function register(){
        return Inertia::render("Register");
    }

    //untuk validasi register
    public function signup(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
            'kelas' => 'required|string',
            'nis' => 'required|numeric|digits_between:9,10',
        ]);

        User::create($request->all());
        
        return redirect('/');
    }


    //untuk logout
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
