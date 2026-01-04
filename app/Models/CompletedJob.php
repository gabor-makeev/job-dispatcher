<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompletedJob extends Model
{
    protected $fillable = ['event_name', 'message'];
}
