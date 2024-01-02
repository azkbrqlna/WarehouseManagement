<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ItemController extends Controller
{
    public function index(){
        return Inertia::render("",[
            'items'=>Item::all()
        ]);
    }

    public function create(){
        return Inertia::render('');
    }

    public function store(Request $request){
        $validated = $request->validate([
            'name'=> 'required',
        ]);
        // Ini untuh tambah gambar
        if($request->file("cover")){
            $extension = $request->file("cover")->getClientOriginalExtension();
            $newName = $request->title.'-'.now()->timestamp.'.'.$extension;
            $request->file('cover')->storeAs('cover', $newName);
            $request['cover'] = $newName;
        };

        $item = Item::create($request->all());
        return redirect('')->with('success','Success add items!');
    }
}
