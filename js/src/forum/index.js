import {extend} from 'flarum/extend';
import UserCard from 'flarum/components/UserCard';
import User from 'flarum/models/User';
import Model from 'flarum/Model';
import UserCromos from './components/UserCromos';

app.initializers.add('edoras-cromos', () => {
    User.prototype.cromos = Model.attribute('cromos');

    extend(UserCard.prototype, 'infoItems', function(items) {
        let user = this.attrs.user;

        if (!user.attribute('canViewCromos')) {
            return;
        }

        //app.store.find('cromos', ).then(console.log);
        findCromos(user);

        items.add(
            'cromos',
            UserCromos.component({
                user,
            }),
            -10
        );
    });
});

/**
 * Search the Cromos for the given User
 * @param user { object } - username from the user Model
 * @returns null
 */
function findCromos(user) {
    const name = user?.attribute('displayName');
    if (!name) return null;

    const HOST = `https://edoras.es/`;
    const ENDPOINT = `api/cromos/user/`;

    const url = `${HOST}${ENDPOINT}${name}/visible`


    fetch(url, {})
        .then(response => response.json())
        .then(response => {
            if (response?.success) {
                user.cromos = response.result;
            }
            // TODO: Handle response error
        })
        .catch(error => console.error(error))
    return null
}

