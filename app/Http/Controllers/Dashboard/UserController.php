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
            "users" => User::where('role_id', 2)->get()
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
            'role' => 'required|string|in:admin,user',
        ]);
        if ($validated == true) {
            $user = User::create($request->all());
            return redirect('/users')->with('success', 'Berhasil membuat user!');
        }
        return redirect()->back()->with('error', 'Mohon cek lagi!');
    }

    public function destroy($slug)
    {
        $user = User::where('slug', $slug)->first();
        $user->delete();
        return redirect()->back()->with('success','Berhasil menghapus user!');
    }

}
