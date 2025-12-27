<?php

namespace App\Listeners;

use App\Events\DndMonsterFound;
use App\Events\JobCompleted;
use App\Events\WeatherFound;
use App\Events\WordFound;
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
        $eventName = class_basename($event::class);
        $time = now()->format('d-m-Y H:i');

        JobCompleted::dispatch("$time | $eventName | $event->message");
    }
}
