import Component from "flarum/common/Component";
import CromoModal from "./CromoModal";

export default class CromoComponent extends Component {
    oninit(vnode) {
        super.oninit(vnode);
    }

    view() {
        const cromo = this.attrs.cromo;
        return (
            <div className="EdorasCromosListAllItem"
                 onclick={() =>
                     app.modal.show(CromoModal, {
                         cromo: cromo
                     })}
            >
                <img className="EdorasCromosListAllItem-image"
                     src={'https://edoras.es/img/cromos/' + cromo.url}
                     alt={cromo.nombre}
                />

                <p className="EdorasCromosListAllItem-name">
                    {cromo.nombre}
                </p>
            </div>
        );
    }
}
