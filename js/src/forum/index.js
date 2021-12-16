import {extend} from 'flarum/extend';
import UserCard from 'flarum/components/UserCard';
import User from 'flarum/models/User';
import Model from 'flarum/Model';
import UserCromosVisibles from './components/UserCromosVisibles';
import LinkButton from "flarum/common/components/LinkButton";
import UserPage from "flarum/forum/components/UserPage";
import CromosProfilePage from "./components/CromosProfilePage";

app.initializers.add('edoras-cromos', () => {
    User.prototype.cromos = Model.attribute('cromos');
    User.prototype.cromosVisibles = Model.attribute('cromosVisibles');
    User.prototype.cantidadCromos = 0;

    extend(UserCard.prototype, 'infoItems', function(items) {
        let user = this.attrs.user;

        findCromos(user);

        items.add(
            'cromos',
            UserCromosVisibles.component({
                user,
            }),
            -10
        );
    });

    app.routes["user.cromos"] = {
        path: "/u/:username/cromos",
        component: CromosProfilePage,
    };

    extend(UserPage.prototype, "navItems", function (items) {
        items.add(
            "badges",
            LinkButton.component(
                {
                    href: app.route("user.cromos", {
                        username: this.user.username(),
                    }),
                    name: "badges",
                    icon: "fas fa-user-tag",
                },
                [
                    "Cromos",
                    <span className="Button-badge">{this.user.cantidadCromos}</span>
                ]
            ),
            90
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

    fetch(`${HOST}${ENDPOINT}${name}/visible`, {})
        .then(response => response.json())
        .then(response => {
            if (response?.success) {
                user.cromosVisibles = response.result;
            }
            // TODO: Handle response error
        })
        .catch(error => console.error(error))

    fetch(`${HOST}${ENDPOINT}${name}/amount`, {})
        .then(response => response.json())
        .then(response => {
            if (response?.success) {
                user.cantidadCromos = response.result;
            }
            // TODO: Handle response error
        })
        .catch(error => console.error(error))

    return null;
}

