<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserCommentController;
use App\Http\Controllers\UserPostController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


Route::group(['middleware' => 'auth:sanctum'], function(){
    Route::get('user/me', function(){
        return Auth::user();
    });
});


Route::get('/post',[PostController::class,'index'])->name('post.index');
Route::post('/post',[PostController::class, 'store'])->name('post.store');



// Route::post('user/register',[AuthController::class,'register'])->name('user.register');
// Route::post('user/login',[AuthController::class,'login'])->name('user.login');
// Route::post('user/logout',[AuthController::class,'logout'])->name('user.logout');



Route::get('/post/{id}',[PostController::class,'show'])->name('post.show');

Route::put('/post/{id}',[PostController::class,'update'])->name('post.update');
Route::delete('/post/{id}',[PostController::class,'destroy'])->name('post.destroy');



Route::get('user/{id}/post',[UserPostController::class,'index'])->name('user.post');
Route::get('user/{id}/comment', [UserCommentController::class, 'index'])->name('user.comment');