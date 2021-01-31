<?php

/*
 * This file is part of edoras/cromos-foro
 *
 * Copyright (c) 2021 Edoras.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Cadiducho\CromosForo\Access;

use Flarum\User\Access\AbstractPolicy;
use Flarum\User\User;

class UserPolicy extends AbstractPolicy
{
    public function viewCromos(User $actor, User $user)
    {
        if (($actor->id === $user->id && $actor->hasPermission('edoras-cromos.editOwn'))
            || $actor->hasPermission('edoras-cromos.view')
        ) {
            return $this->allow();
        }

        return $this->deny();
    }

    public function editCromosSelection(User $actor, User $user)
    {
        if (($actor->id === $user->id && $actor->hasPermission('edoras-cromos.editOwn'))
            || $actor->hasPermission('edoras-cromos.editAny')) {
            return $this->allow();
        }

        return $this->deny();
    }
}
