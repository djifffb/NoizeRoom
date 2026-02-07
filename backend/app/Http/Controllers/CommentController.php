<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Post;
use App\Models\Comment;

class CommentController extends Controller
{

    function index(){
        return response()->json([
            'comments' => Comment::all(),
        ]);
    }

    function store(Request $request, Post $post){
        $request->validate([
            'comment' => 'required|string|max:255',
        ]);

        $post->comments()->create([
            'user_id' => $request->user_id, // Auth::id()
            'comment' => $request->comment,
        ]);

        return response()->json([
            'message' => 'Comment added!'
        ]);
    }
}
