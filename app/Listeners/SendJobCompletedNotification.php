<?php

namespace App\Listeners;

use App\Events\DndMonsterFound;
use App\Events\JobCompleted;
use App\Events\WeatherFound;
use App\Events\WordFound;
use App\Models\CompletedJob;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendJobCompletedNotification
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(WeatherFound|DndMonsterFound|WordFound $event): void
    {
        $completedJob = CompletedJob::create([
            'event_name' => class_basename($event::class),
            'message' => $event->message,
        ]);

        JobCompleted::dispatch($completedJob);
    }
}
