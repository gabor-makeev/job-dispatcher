<?php

namespace App\Http\Controllers;

use App\Jobs\GetWeather;
use Illuminate\Http\Request;

class Weather extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'city' => 'required|string'
        ]);

        GetWeather::dispatch($validated['city']);
    }
}
