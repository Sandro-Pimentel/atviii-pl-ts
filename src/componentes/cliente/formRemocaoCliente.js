export default function FormRemocaoCliente(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <div className="alert alert-info" role="alert">
                    Remoção de Cliente
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>CPF</span>
                    <input type="text" className="form-control" placeholder="123.456.789-10" aria-label="CPF" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Remover</button>
                </div>
            </form>
        </div>
    )
}