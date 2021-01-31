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

use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\User;

class AddUserCromosAttribute
{
    public function __invoke(UserSerializer $serializer, User $user, array $attributes): array
    {
        $actor = $serializer->getActor();

        if ($actor->can('viewCromos', $user)) {
            $attributes += [
                'cromos'        => $user->cromos,
                'canViewCromos' => true,
                'canEditCromos' => $actor->can('editCromos', $user),
            ];
        }

        return $attributes;
    }
}
