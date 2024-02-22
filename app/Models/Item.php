<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Item extends Model
{
    use HasFactory, Sluggable;

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function rentals()
    {
        return $this->hasMany(Rental::class);
    }

    protected $fillable = [
        'name',
        'cover',
        'total_item',
        'status',
    ];

    protected static function boot()
{
    parent::boot();

    static::updating(function ($item) {
        if ($item->isDirty('name')) {
            $item->slug = Str::slug(strtolower($item->name));
        }
    });
}

}
