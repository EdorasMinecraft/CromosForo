import Component from 'flarum/Component';
import LoadingIndicator from 'flarum/components/LoadingIndicator';

/**
 * The `UserCromos` component displays a user's comos, optionally letting the user
 * edit it.
 */
export default class UserCromos extends Component {
    oninit(vnode) {
        super.oninit(vnode);
        /**
         * Whether or not the cromos is currently being edited.
         *
         * @type {Boolean}
         */
        this.editing = false;

        /**
         * Whether or not the cromos is currently being saved.
         *
         * @type {Boolean}
         */
        this.loading = false;
    }

    view() {
        const user = this.attrs.user;
        let content;

        let subContent;

        if (this.loading) {
            subContent = <p className="EdorasCromos-placeholder">{LoadingIndicator.component({ size: 'tiny' })}</p>;
        } else {
            subContent = Object.values(user.cromos).map((cromo) => {
                return (
                    <div className="EdorasCromosListItem">
                        <div className="EdorasCromosListItem-content">
                            <img className="EdorasCromosList-image" src={'https://edoras.es/img/cromos/' + cromo.url} alt={cromo.nombre}/><span className="EdorasCromosList-title">{cromo.nombre}</span>
                        </div>
                    </div>
                )
            });
        }

        content = (
            <div className="EdorasCromosList">
                {subContent}
            </div>
        );

        return (
            <div className='EdorasCromos-widget'>
                {content}
            </div>
        );
    }

    /**
     * Edit the cromos collection.
     *
    edit() {
        this.editing = true;
        m.redraw.sync();

        const cromos = this;
        const save = function(e) {
            if (e.shiftKey) return;
            e.preventDefault();
            cromos.save($(this).val());
        };

        this.$('textarea')
            .focus()
            .bind('blur', save)
            .bind('keydown', 'return', save);
        m.redraw();
    }*/

    /**
     * Save the cromos collection.
     *
     * @param {String} value
     *
    save(value) {
        const user = this.attrs.user;

        if (user.cromos() !== value) {
            this.loading = true;

            user.save({ cromos: value })
                .catch(() => {})
                .then(() => {
                    this.loading = false;
                    m.redraw();
                });
        }

        this.editing = false;
        m.redraw();
    }*/
}
