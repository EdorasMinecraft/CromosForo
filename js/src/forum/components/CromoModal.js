import Modal from "flarum/components/Modal";
import ItemList from "flarum/utils/ItemList";
import Link from "flarum/common/components/Link";

export default class CromoModal extends Modal {
    oninit(vnode) {
        super.oninit(vnode);

        this.loading = false;
    }

    className() {
        return "Modal--small";
    }

    title() {
        return "Información del cromo";
    }

    content() {
        return (
            <div>
                <div className="Modal-body">{this.data().toArray()}</div>
                <div className="Modal-footer">
                    <Link
                        href={'https://edoras.es/cromos.php?cromo=' + this.attrs.cromo.id}
                        external={true}
                        className={"Button"}
                        style={{
                            margin: "0 10px",
                        }}
                        aria-label={"Detalles del cromo en la web"}
                    >
                        Detalles del cromo en la web
                    </Link>
                </div>
            </div>
        );
    }

    data() {
        const items = new ItemList();
        let cromo = this.attrs.cromo;

        items.add(
            "name",
            <div className={"CromoModalListItem"}>
                <p>
                    <b>Nombre:</b> {cromo.nombre}
                </p>
            </div>
        );

        items.add(
            "type",
            <div className={"CromoModalListItem"}>
                <p>
                    <b>Tipo:</b> {cromo.tipo}
                </p>
            </div>
        );

        items.add(
            "otorgado",
            <div className={"CromoModalListItem"}>
                <p>
                    <b>Otorgado el </b> {cromo.fecha_otorgado} por <Link href={app.route('user', {username: cromo.staff})}>{cromo.staff}</Link>
                </p>
            </div>
        );

        items.add(
            "description",
            <div className={"CromoModalListItem"}>
                <p>
                    <b>Descripción: </b>
                </p>
                <p>{cromo.descripcion}</p>
            </div>
        );

        items.add(
            "evidencies",
            <div className={"CromoModalListItem"}>
                <p>
                    <b>Requisitos: </b>
                </p>
                <p>{cromo.evidencias}</p>
            </div>
        );

        if (cromo.retroactividad) {
            items.add(
                "retroactividad",
                <div className={"CromoModalListItem"}>
                    <p>
                        <b>Retroactividad: </b>
                    </p>
                    <p>{cromo.retroactividad_tiempo}</p>
                </div>
            );
        }

        return items;
    }
}
