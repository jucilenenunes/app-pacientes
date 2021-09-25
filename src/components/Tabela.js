const Tabela = ({ dadosPacientes, setIdAtual, deletePaciente }) => {
    let dadosCount = 0
    return (
        <table className="table table-bodered table-stripped">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th><span className="float-end">Ações&nbsp;</span></th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(dadosPacientes).map( id => {
                        return (
                            <tr key={dadosCount++} title={`E-Mail: ${dadosPacientes[id].email}`}>
                                <td> {dadosPacientes[id].nomeCompleto} </td>
                                <td> {dadosPacientes[id].telefone} </td>
                                <td>
                                    <span className="btn-group float-end" role="group">
                                        <button className="btn btn-primary btn-sm" onClick={() => {setIdAtual(id)}}>
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() => {deletePaciente(id)}}>
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </span>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Tabela