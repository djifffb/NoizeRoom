<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserPostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get('/posts',[PostController::class,'index'])->name('index');
Route::get('/post/{id}',[PostController::class,'show'])->name('show');


Route::get('user/{id}/posts',[UserPostController::class,'index'])->name('user.post');