<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Comment;

class UserCommentController extends Controller
{
    function index($id){
        return response()->json([
            'comment' => Comment::where('user_id', $id)->get(),
        ]);
    }
}
