<?php

namespace App\Jobs;

use App\Events\WordFound;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class GetWordDefinition implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(private string $word) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $dictionaryApiUrl = env('DICTIONARY_API_URL');

        $response = Http::get("{$dictionaryApiUrl}/{$this->word}");

        if ($response->notFound()) {
            WordFound::dispatch("No definition for this word: '{$this->word}'. Please try a different word.");
            return;
        }

        if (!$response->ok()) {
            WordFound::dispatch('Something went wrong. Please try again.');
            return;
        }

        $responseObj = $response->object()[0];
        $word = $responseObj->word;
        $meanings = [];

        $message = "$word - ";

        foreach ($responseObj->meanings as $meaning) {
            $partOfSpeech = Str::upper($meaning->partOfSpeech);
            $result = "{$partOfSpeech}:";

            foreach ($meaning->definitions as $definition) {
                $result .= " {$definition->definition}";
            }

            $meanings[] = $result;
        }

        $meaningsMessage = Arr::join($meanings, ' ');
        $message .= $meaningsMessage;

        WordFound::dispatch($message);
    }
}
