<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'item_id',
        'reason',
        'amount_rental',
        'amount_pickup',
        'rent_date',
        'pickup_date',
        'return_date',
        'pickup_date_received',
        'actual_return_date',
        'photo',
        'type',
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

