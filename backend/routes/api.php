<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserPostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get('/post',[PostController::class,'index'])->name('index');
Route::post('/post',[PostController::class, 'store'])->name('store');

Route::get('/post/{id}',[PostController::class,'show'])->name('show');
Route::get('user/{id}/post',[UserPostController::class,'index'])->name('user.post');

