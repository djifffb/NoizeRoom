<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserPostController extends Controller
{
    public function index($id){
        $user = User::findOrFail($id);
        return response()->json([
            'posts' => $user->posts
        ]);
    }
}
