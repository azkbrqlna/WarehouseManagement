<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use File;

class ItemController extends Controller
{
    public function index()
    {
        return Inertia::render("Dashboard/Barang/index", [
            'items' => Item::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Barang/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'amount' => 'required|numeric',
            'file' => 'required|image|mimes:jpeg, png, jpg, gif|max:2048'
        ]);
        // Ini untuh tambah gambar
        if ($request->file("file")) {
            $extension = $request->file("file")->getClientOriginalExtension();
            $newName = $request->name . '-' . now()->timestamp . '.' . $extension;
            $request->file('file')->storeAs('cover', $newName);
            $request['cover'] = $newName;
        }
        ;

        Item::create($request->all());
        return redirect('item/create')->with('success', 'Berhasil menambah barang!');
    }

    public function destroy($slug)
    {
        $item = Item::whereSlug($slug)->first();
        Storage::delete('cover/'.$item->cover);
        $item->delete();
        return redirect()->back()->with('success', 'Berhasil menghapus barang!');
    }
}
