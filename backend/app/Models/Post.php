<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use  App\Models\User;


class Post extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'description',
        'file_path',          
        'duration',
        'size',     
        'tags',
    ];

    protected $casts = [
        'tags' => 'array',
    ];

    public function user(){
        return $this->hasMany(User::class);
    }
}
