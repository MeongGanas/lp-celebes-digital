<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactMessage extends Model
{
    protected $guarded = ['id'];

    public function portofolio()
    {
        return $this->belongsTo(Portofolio::class);
    }
}
