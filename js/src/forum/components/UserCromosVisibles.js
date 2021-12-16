import Component from 'flarum/Component';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import Tooltip from "flarum/common/components/Tooltip";
import CromoModal from "./CromoModal";

/**
 * The `UserCromos` component displays a user's comos, optionally letting the user
 * edit it.
 */
export default class UserCromosVisibles extends Component {
    oninit(vnode) {
        super.oninit(vnode);

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
            subContent = Object.values(user.cromosVisibles).map((cromo) => {
                return (
                    <Tooltip
                        text={cromo.nombre}>
                        <div className="EdorasCromosListItem"
                             onclick={() =>
                                 app.modal.show(CromoModal, {
                                         cromo: cromo
                                     }
                                 )}>
                            <div className="EdorasCromosListItem-content">
                                <img className="EdorasCromosList-image"
                                     src={'https://edoras.es/img/cromos/' + cromo.url}
                                     alt={cromo.nombre}/>
                            </div>
                        </div>
                    </Tooltip>
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
}
