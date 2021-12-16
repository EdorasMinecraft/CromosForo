import UserPage from "flarum/components/UserPage";
import LoadingIndicator from "flarum/components/LoadingIndicator";
import UserCromosList from "./UserCromosList";

export default class CromosProfilePage extends UserPage {
    oninit(vnode) {
        super.oninit(vnode);

        this.user = null;

        this.loading = true;

        this.loadUser(m.route.param("username"));
    }

    content() {
        if (!this.user || this.loading) {
            return <LoadingIndicator size={46} />;
        }

        return UserCromosList.component({
            user: this.user,
        });
    }

    show(user) {
        super.show(user);
        this.user = user;

        const name = user?.attribute('displayName');
        if (!name) return null;

        const HOST = `https://edoras.es/`;
        const ENDPOINT = `api/cromos/user/`;

        const url = `${HOST}${ENDPOINT}${name}`
        let that = this;


        fetch(url, {})
            .then(response => response.json())
            .then(response => {

                if (response?.success) {
                    user.cromos = response.result;
                    that.loading = false;
                    m.redraw();
                }
            })
            .catch(error => console.error(error))
    }
}
