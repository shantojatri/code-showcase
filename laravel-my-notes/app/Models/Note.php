<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Note extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'slug',
        'note_details',
        'color_class',
    ];

    public const BG_COLORS = [
        'bg-red-200',
        'bg-pink-200',
        'bg-yellow-200',
        'bg-purple-200',
        'bg-gray-200',
        'bg-cyan-200',
        'bg-orange-200',
        'bg-sky-200',
        'bg-blue-200',
    ];

    /**
     * Date formate d/m/y when get the data
     *
     * @param  string  $value
     * @return \Illuminate\Database\Eloquent\Casts\Attribute
     */
    protected function createdAt(): Attribute
    {
        return new Attribute(
            get: fn ($value) =>  Carbon::parse($value)->format('d/m/Y'),
        );
    }
}
