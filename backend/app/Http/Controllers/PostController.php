<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;
use Illuminate\Support\Facades\Storage;


class PostController extends Controller
{
    public function index(){
        return response()->json([
            'posts' => Post::select('id','title','description')->get()
        ]);
    }

    // ----------------------------------------------------------

    public function show($id){
        return response()->json([
            'post' => Post::findOrFail($id)
        ]);
    }

    // ----------------------------------------------------------

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
            ], Response::HTTP_NOT_FOUND);
        }
        
        $track_path = null;
        $track = $request->file('file');
        $track_name = time() . '_' . $track->getClientoriginalName();
        $track_path = $track->storeAs('tracks',$track_name,'public');

        Post::create([
            'user_id' => $request->user_id, // Auth::id()
            'title' => $request->title,
            'description' => $request->description,
            'file_path' => $track_path,      
            'duration' => $request->duration,
            'tags' => $request->tags,
        ]);

        return response()->json([
            'message' => 'the file has been added!',
            'path' => $track_path,
        ], Response::HTTP_OK);
    }

    // ----------------------------------------------------------

    function update(Request $request, $id){
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'file' => 'nullable|mimes:mp3,wav,flac|max:21000',      
            'duration' => 'nullable|integer|min:0',
            'tags' => 'nullable|array',
        ]);

        // dd([
        //     'all' => $request->all(),
        // ]);

        if ($request->hasFile('file')){
            $post = Post::findOrFail($id);

            if (Storage::disk('public')->exists($post->file_path)){
                Storage::disk('public')->delete($post->file_path);
            }
    
            $track_name = time() . '_' . $request->file('file')->getClientOriginalName();
            $track_path = $request->file('file')->storeAs('tracks',$track_name,'public');
        }
    
        $post->update([
            'title' => $request->title ? : $post->title,
            'description' => $request->description ? : $post->description,
            'file_path' => $track_path ? : $post->track_path,      
            'duration' => $request->duration ? : $post->duration,
            'tags' => $request->tags ? : $post->tags,
        ]);

        return response()->json([
            'message' => 'the file has been updated!',
            'file_path' => $track_path,
        ], Response::HTTP_OK);
    }

    // ----------------------------------------------------------

    function destroy($id){
        $post = Post::findOrFail($id);
        Storage::disk('public')->delete($post->file_path);
        $post->delete();

        return response()->json([
            'message' => 'the file has been deleted',
        ], Response::HTTP_OK);
    }
}
