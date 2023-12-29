<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        return Inertia::render("Users");
    }

    public function destroy($id){
        $delete = User::find($id);
        $delete->delete();

        if ($delete) {
            return redirect()->back()->with('success', 'Gagal menghapus user.');
          }
      
          return redirect()->back()->with('error', 'Berhasil menghapus user.');
    }
    
}