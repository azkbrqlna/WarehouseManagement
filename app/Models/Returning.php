<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Returning extends Model
{
    use HasFactory;

    protected $table = "returns";

    protected $fillable = [
        'user_id',
        'item_id',
        'actual_return_date',
        'photo',
        'rent_date',
    ];

    public function item()
    {
        return $this->belongsTo(Item::class, 'item_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
