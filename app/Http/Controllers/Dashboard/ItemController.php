<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ItemController extends Controller
{
    public function index()
    {
        return Inertia::render("Dashboard/Barang/index", [
            'items' => Item::paginate(10),
            'item_count' => Item::count(),
        ]);
    }

    public function store(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|string',
            'total_item' => 'required|numeric',
            'jenis' => 'required|string',
            'file' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        ]);
        if(!$validate){
            return('error');
        }
        // Ini untuk tambah gambar
        if ($request->file("file")) {
            $extension = $request->file("file")->getClientOriginalExtension();
            $newName = now()->timestamp . '.' . $extension;
            Storage::disk('public')->putFileAs('cover', $request->file("file"), $newName);
            $request['cover'] = $newName;
        }

        Item::create($request->all());
        return redirect('items')->with('success', 'Berhasil menambah barang!');
    }

    public function destroy($id)
    {
        $item = Item::find($id);
        Storage::delete('cover/' . $item->cover);
        $item->delete();
        return redirect('/items');
    }

    public function update(Request $request)
    {
        $request->validate([
            'status' => 'required|boolean',
        ]);
        $item = Item::find($request->id);
        $item->status = $request->status;
        $item->save();
    }

    public function editItem($id, Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'total_item' => 'required|numeric',
            'jenis' => 'required|string',
            'file' => 'image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        ]);

        $item = Item::findOrFail($id);
        $item->name = $request->name;
        $item->total_item = $request->total_item;
        if ($request->file("file")) {
            Storage::delete('cover/' . $item->cover);
            $extension = $request->file("file")->getClientOriginalExtension();
            $newName = now()->timestamp . '.' . $extension;
            Storage::disk('public')->putFileAs('cover', $request->file("file"), $newName);
            $item->cover = $newName;
        }
        $item->save();
        return redirect('/items');
    }
}
