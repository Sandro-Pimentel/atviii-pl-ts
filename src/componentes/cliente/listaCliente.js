/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaCliente(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <div className="alert alert-info" role="alert">
                Lista de Clientes
            </div>
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">Cliente 1</a>
                <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>Cliente 2</a>
                <a href="#" className="list-group-item list-group-item-action">Cliente 3</a>
                <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>Cliente 4</a>
                <a href="#" className="list-group-item list-group-item-action">Cliente 5</a>
                <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>Cliente 6</a>
            </div>
        </div>
    )
}