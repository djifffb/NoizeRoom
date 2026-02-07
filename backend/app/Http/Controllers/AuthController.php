<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class AuthController extends Controller
{
    function register(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'role' => 'required|in:admin,user',
            'password' => 'required|string|min:8|confirmed',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
            'password' => bcrypt($request->password),
        ]);

        return response()->json([
            'message' => 'registration was successful!'
        ], Response::HTTP_OK);
    }

    // ----------------------------------------------------------

    function login(Request $request){
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8',
        ]);

        if(Auth::attempt($request->only('email','password'))){
            return response()->json([
                'message' => 'authorization was successful!'
            ], Response::HTTP_OK);
        }
        
        return response()->json([
            'message' => 'authorization failed!'
        ], Response::HTTP_UNAUTHORIZED);

    }

    // ----------------------------------------------------------

    function logout(Request $request){
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json([
            'message' => 'you have successfully logged out of the account!'
        ]);
    }
}
