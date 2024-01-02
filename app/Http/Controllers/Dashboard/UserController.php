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
        ]);
        if ($validated == true) {
            $user = User::create($request->all());
            return redirect('/users')->with('success', 'User created succesfully!');
        }
        return redirect()->back()->with('error', 'Check again credential!');
    }

    public function destroy($slug)
    {
        $user = User::where('slug', $slug)->first();
        $user->delete();
        return redirect('/users')->with('success','User Deleted!');
    }

}
