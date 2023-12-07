<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NoteController;

Route::get('/', function () {
    return view('index');
});

Route::controller(AuthController::class)->group(function () {
    Route::get('/login', 'login')->name('login');
    Route::post('/authenticate', 'authenticate')->name('authenticate');
    Route::get('/register', 'registerView')->name('register');
    Route::post('/register', 'register')->name('user.register');
    Route::post('/logout', 'logout')->name('logout');
});

Route::name('dashboard.')->prefix('dashboard')->middleware(['auth'])->group(function () {
    Route::resource('notes', NoteController::class);
});
