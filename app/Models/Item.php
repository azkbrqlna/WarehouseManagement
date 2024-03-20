<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Item extends Model
{
    use HasFactory;

    public function rentals()
    {
        return $this->hasMany(Rental::class);
    }

    protected $fillable = [
        'name',
        'cover',
        'total_item',
        'jenis',
        'status',
    ];

}
