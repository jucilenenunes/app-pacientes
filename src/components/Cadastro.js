import React from 'react';
import FormularioCadastro from './FormularioCadastro';
//import fireDb from '../database/firebase'
const Cadastro = () => {

    const addEedit = obj => {
        
    }

    return (
        <form>
            <div>
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">CADASTRO DE PACIENTES</h1>
                        <p className="col-md-8 fs-4">
                            Evoluido...
                        </p>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-6">
                    <FormularioCadastro addEedit={addEedit} />
                    </div>
                    <div className="col-md-6">
                        <h2>Lista de Pacientes</h2>
                    </div>

                </div>
            </div>
        </form>
        
        
    )
}

export default Cadastro;