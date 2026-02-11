<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;



Route::get('/', function(){
    return view('create');
});


Route::post('user/register',[AuthController::class,'register'])->name('user.register');
Route::post('user/login',[AuthController::class,'login'])->name('user.login');
Route::post('user/logout',[AuthController::class,'logout'])->name('user.logout');
