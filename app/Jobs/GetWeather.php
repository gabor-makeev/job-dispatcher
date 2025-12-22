<?php

namespace App\Jobs;

use App\Events\WeatherFound;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Http;

class GetWeather implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(private string $city) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $weatherApiKey = env('WEATHER_API_KEY');
        $weatherApiUrl = env('WEATHER_API_URL');

        $response = Http::get("{$weatherApiUrl}/current.json?key={$weatherApiKey}&q={$this->city}&aqi=no")->object();
        $city = $response->location->name;
        $country = $response->location->country;
        $temperature = $response->current->temp_c;
        $condition = $response->current->condition->text;
        $time = $response->current->last_updated;

        WeatherFound::dispatch("The temperature in {$city} ({$country}) is {$temperature}. Condition: {$condition} (as of {$time})");
    }
}
