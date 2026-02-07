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
        'tags',
    ];

    protected $casts = [
        'tags' => 'array',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }
}
