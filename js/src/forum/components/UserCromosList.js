import Component from "flarum/common/Component";
import CromoComponent from "./CromoComponent";

export default class UserCromosList extends Component {
    view() {
        const cromos = [];

        this.attrs.user.cromos.map((cromo) => {
            if (!cromo) return null;

            cromos.push(cromo);
        });

        return (
            <div className="UserCromos">

                <h3>Lista completa de Cromos</h3>

                {cromos.length >= 1 && (

                    <div className="EdorasCromosListAll">
                        {cromos
                            .map((cromo) => (
                                <CromoComponent cromo={cromo}/>
                        ))}
                    </div>
                )}
                {cromos.length < 1 && (
                    <p>Este usuario no tiene cromos</p>
                )}
            </div>
        );
    }
}
