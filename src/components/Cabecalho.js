import imgPacientes from './imgPacientes.png'

const Cabecallho = () => {
    return (
        <div className="mb-2 bg-light rounded-3">
            <div class="py-2 text-center">
                <img width={80} className="border border-dark" src={imgPacientes} alt="Cadastro de Pacientes" />
                <h2>Cadastro de Pacientes</h2>
                <p class="lead">
                    Esse exercício tem o objetivo de aprimorar os conhecimentos em CRUD.<br />
                    (Criar, Listar, Atualizar e Deletar).<br />
                    By Jucilene Nunes
                </p>
            </div>
        </div>
    )
}

export default Cabecallho