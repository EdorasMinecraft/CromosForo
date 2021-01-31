import app from 'flarum/app';

app.initializers.add('edoras-cromos', () => {
    app.extensionData
        .for('cadiducho-edoras-cromos')
        .registerPermission(
            {
                icon: 'fas fa-pen',
                label: 'Ver cromos',
                permission: 'edoras-cromos.view',
                allowGuest: true,
            },
            'view'
        )
        .registerPermission(
            {
                icon: 'fas fa-pen',
                label: 'Editar mis cromos',
                permission: 'edoras-cromos.editOwn',
            },
            'start'
        )
        .registerPermission(
            {
                icon: 'fas fa-pen',
                label: 'Editar cromos de cualquiera',
                permission: 'edoras-cromos.editAny',
            },
            'moderate'
        );
});
