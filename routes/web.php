<?php

use App\Http\Controllers\Index;
use App\Http\Controllers\Weather;
use App\Http\Controllers\DndMonster;
use App\Http\Controllers\WeatherController;
use Illuminate\Support\Facades\Route;

Route::get('/', Index::class)
    ->name('home');

Route::post('/weather', Weather::class)
    ->name('weather');

Route::post('/dnd-monster', DndMonster::class)
    ->name('dnd-monster');