import {extend} from 'flarum/extend';
import 'autolink-js';
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
            })
        );
    });
});

function findCromos(user) {
    let req = new XMLHttpRequest();
    req.open('GET', "https://edoras.es/api/cromos/user/" + user.attribute('displayName'), true);
    req.onreadystatechange = function (aEvt) {
        if (req.readyState === 4) {
            if (req.status === 200) {
                let response = JSON.parse(req.response);
                if (response.success) {
                    user.cromos = response.result;
                }
            }
        }
    };
    req.send(null);
}
