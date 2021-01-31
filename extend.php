<?php

/*
 * This file is part of edoras/cromos-foro
 *
 * Copyright (c) 2021 Edoras.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Cadiducho\CromosForo;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\Extend;
use Flarum\User\Event\Saving;
use Flarum\User\User;
use Cadiducho\CromosForo\Listeners\AddUserCromosAttribute;
use Cadiducho\CromosForo\Listeners\SaveUserCromosSelection;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    (new Extend\Event())
        ->listen(Saving::class, SaveUserCromosSelection::class),

    (new Extend\ApiSerializer(UserSerializer::class))
        ->mutate(AddUserCromosAttribute::class),

    (new Extend\Policy())
        ->modelPolicy(User::class, Access\UserPolicy::class),
];
