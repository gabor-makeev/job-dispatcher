<?php

namespace App\Http\Controllers;

use App\Jobs\GetWordDefinition;
use Illuminate\Http\Request;

class Dictionary extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'word' => 'required|string'
        ]);

        GetWordDefinition::dispatch($validated['word']);
    }
}
