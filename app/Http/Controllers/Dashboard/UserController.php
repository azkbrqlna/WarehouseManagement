<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render("Dashboard/Users/index", [
            "users" => User::where('role_id',2)->latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Users/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
            'kelas' => 'required|string',
            'nis' => 'required|unique:users|numeric|digits_between:9,10',
            'role_id' => 'required|numeric',
        ]);

        if ($validated == true) {
            $user = new User();
            $user->username = $request->username;
            $user->password = $request->password;
            $user->kelas = $request->kelas;
            $user->nis = $request->nis;
            $user->role_id = $request->role_id;
            $user->save();
            return redirect('/users');
        }
        return redirect()->back();
    }

    public function destroy($slug)
    {
        $user = User::where('slug', $slug)->first();
        $user->delete();
        return redirect()->back();
    }
}
