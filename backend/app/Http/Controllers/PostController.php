<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Models\User;


class PostController extends Controller
{
    public function index(){
        return response()->json([
            'posts' => Post::select('id','title','description')->get()
        ]);
    }

    public function show($id){
        return response()->json([
            'post' => Post::findOrFail($id)
        ]);
    }

    public function store(Request $request){
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'file' => 'required|mimes:mp3,wav,flac|max:21000',      
            'duration' => 'nullable|integer|min:0',
            'tags' => 'nullable|array',
        ]);

        if(!$request->hasFile('file')){
            return response()->json([
                'message' => 'file not found!'
            ]);
        }
        
        $track_path = null;
        $track = $request->file('file');
        $track_name = time() . '_' . $track->getClientoriginalName();
        $track_path = $track->storeAs('tracks',$track_name,'public');
        

        Post::create([
            'user_id' => $request->user_id,
            'title' => $request->title,
            'description' => $request->description,
            'file_path' => $track_path,      
            'duration' => $request->duration,
            'tags' => $request->tags,
        ]);

        return response()->json([
            'message' => 'file added!',
            'path' => $track_path,
        ]);
    }
}
