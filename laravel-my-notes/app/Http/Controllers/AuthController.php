<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use App\Http\Requests\UserRegisterRequest;

class AuthController extends Controller
{
    /**
     * Instantiate a new LoginRegisterController instance.
     */
    public function __construct()
    {
        $this->middleware('guest')->except([
            'logout'
        ]);
    }

    public function login()
    {
        return view('auth.login');
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            Session::flash('success', 'You have successfully logged in!');
            return redirect()->route('dashboard.notes.index');
        } else {
            Session::flash('error', 'Your provided credentials do not match in our records.');
            return back();
        }
    }

    public function registerView()
    {
        return view('auth.register');
    }

    public function register(UserRegisterRequest $request)
    {
        $validated = $request->validated();
        $validated['password'] = Hash::make($validated['password']);
        $user = User::create($validated);

        $credentials = $request->only('email', 'password');
        Auth::attempt($credentials);
        $request->session()->regenerate();

        if ($user) {
            Session::flash('success', 'User Registered Successfully.');
            return redirect()->route('dashboard.notes.index');
        } else {
            Session::flash('error', 'User Registration Failed!');
            return back();
        }
    }

    public function logout()
    {
        Session::flush();
        Auth::logout();

        Session::flash('success', 'You have logged out successfully!');
        return redirect()->route('login');
    }
}
