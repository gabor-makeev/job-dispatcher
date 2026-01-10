<?php

namespace App\Http\Controllers;

use App\Models\CompletedJob;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class Index extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $completedJobsA = CompletedJob::on('mysql')->orderBy('created_at', 'desc')->get();
        $completedJobsB = CompletedJob::on('mysql_2')->orderBy('created_at', 'desc')->get();

        $dndMonstersResponse = Http::get('https://www.dnd5eapi.co/api/2014/monsters')->collect();
        $dndMonstersResponseFiltered = Arr::select($dndMonstersResponse['results'], ['index', 'name']);

        return Inertia::render(
            'welcome', 
            [
                'content' => [
                    'dnd_monsters' => $dndMonstersResponseFiltered,
                    'completed_jobs' => [
                        'a' => $completedJobsA,
                        'b' => $completedJobsB
                    ],
                ]
            ]
        );
    }
}
