<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class CompletedJob extends Model
{
    protected $fillable = ['event_name', 'message'];
    protected $appends = ['database'];

    protected function database(): Attribute
    {
        return new Attribute(
            get: fn () => $this->getConnection()->getDatabaseName() === 'laravel' ? 'a' : 'b',
        );
    }
}
