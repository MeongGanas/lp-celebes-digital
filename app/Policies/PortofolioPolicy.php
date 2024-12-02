<?php

namespace App\Policies;

use App\Models\Portofolio;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class PortofolioPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->role->name === 'production' || $user->role->name === 'admin';
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Portofolio $portofolio): bool
    {
        return $user->role->name === 'production' || $user->role->name === 'admin';
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->role->name === 'production';
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Portofolio $portofolio): bool
    {
        return $user->role->name === 'production';
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Portofolio $portofolio): bool
    {
        return $user->role->name === 'production';
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Portofolio $portofolio): bool
    {
        return $user->role->name === 'production';
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Portofolio $portofolio): bool
    {
        return $user->role->name === 'production';
    }
}
