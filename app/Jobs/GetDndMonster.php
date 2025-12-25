<?php

namespace App\Jobs;

use App\Events\DndMonsterFound;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class GetDndMonster implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(private string $monster) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $dndApiUrl = env('DND_API_URL');

        $response = Http::get("{$dndApiUrl}/monsters/{$this->monster}")->object();

        $monsterName = $response->name;
        $monsterType = Str::ucfirst($response->type);
        $monsterHitPoints = $response->hit_points;
        $monsterExp = $response->xp;

        DndMonsterFound::dispatch("{$monsterName}. Type: {$monsterType}; Hit Points: {$monsterHitPoints}; XP: {$monsterExp}");
    }
}
