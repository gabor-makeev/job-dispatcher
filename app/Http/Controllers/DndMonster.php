<?php

namespace App\Http\Controllers;

use App\Jobs\GetDndMonster;
use Illuminate\Http\Request;

class DndMonster extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'monster' => 'required'
        ]);

        GetDndMonster::dispatch($validated['monster']);
    }
}
