<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Models\User;


class PostController extends Controller
{
    public function index(){
        return response()->json([
            'posts' => Post::all()
        ]);
    }

    public function show($id){
        // return response()->json([
        //     'posts' => $user->posts()
        //         ->select('id','title','description')
        //         ->get()
        // ]);

    }

    public  function store(){

    }
}
