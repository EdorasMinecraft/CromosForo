<?php

/*
 * This file is part of edoras/cromos-foro
 *
 * Copyright (c) 2021 Edoras.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Cadiducho\CromosForo\Listeners;

use Flarum\User\Event\Saving;
use Cadiducho\CromosForo\Event\CromosSelectionChanged;
use Illuminate\Support\Arr;

class SaveUserCromosSelection
{
    /**
     * @param Saving $event
     *
     * @throws \Flarum\User\Exception\PermissionDeniedException
     */
    public function handle(Saving $event)
    {
        $user = $event->user;
        $data = $event->data;
        $actor = $event->actor;

        $attributes = Arr::get($data, 'attributes', []);

        if (isset($attributes['cromos'])) {
            $actor->assertCan('editCromos', $user);

            $user->cromos = $attributes['cromos'];

            $user->raise(new CromosSelectionChanged($user));

            $user->save();
        }
    }
}
