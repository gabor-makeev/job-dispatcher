<?php

use App\Http\Controllers\Weather;
use App\Http\Controllers\WeatherController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::post('/weather', Weather::class)
    ->name('weather');