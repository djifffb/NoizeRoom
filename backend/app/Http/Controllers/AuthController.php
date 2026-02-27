<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $access_token = JWTAuth::fromUser($user);

        return response()->json([
            'message' => 'registration was successful!',
            'access_token' => $access_token,
        ], Response::HTTP_OK);
    }

    // ----------------------------------------------------------

    function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8',
        ]);

        $credentials = $request->only('email', 'password');

        if ($access_token = JWTAuth::attempt($credentials)) {
            return response()->json([
                'message' => 'authorization was successful!',
                'access_token' => $access_token,
            ], Response::HTTP_OK);
        }

        return response()->json([
            'message' => 'authorization failed!',
        ], Response::HTTP_UNAUTHORIZED);
    }

    // ----------------------------------------------------------

    function user()
    {
        return response()->json(Auth::user());
    }
}
