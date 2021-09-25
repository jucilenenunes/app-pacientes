import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const FormularioCadastro = (props) => {
    //Variaveis de captura de dados
    const camposIniciaisDeValores = {
        nomeCompleto: '',
        telefone: '',
        email: '',
        endereco: '',
    }
    //Destructuring assinment (abstrair dados)
    let [values, setValues] = useState(camposIniciaisDeValores);

    const manipuladorInputChange = e => {
        let {name, value} = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    useEffect( () => {
        if(props.idAtual === '') {
            setValues({
                ...camposIniciaisDeValores
            })
        }else {
            setValues({
                ...props.dadosPacientes[props.idAtual]
            })
        }
    }, [props.idAtual, props.dadosPacientes]);

    const manipuladorFormEnvio = () => {
        props.addEedit(values);
    }
    
    return (
        <form autoComplete="off">
            <div className="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i className="fas fa-user fa-input-size"></i></span>
                <input className="form-control" placeholder="Nome Completo" name="nomeCompleto" value={values.nomeCompleto} 
                onChange={manipuladorInputChange} />
            </div>

            <div className="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i className="fas fa-phone-alt fa-input-size"></i></span>
                <input className="form-control" placeholder="Telefone" name="telefone" value={values.telefone} 
                onChange={manipuladorInputChange}/>
            </div>

            <div className="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i className="fas fa-at fa-input-size"></i></span>
                <input className="form-control" placeholder="Email" name="email" value={values.email} 
                onChange={manipuladorInputChange}/>
            </div>

            <div className="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i className="bi bi-geo-alt-fill"></i></span>
                <input className="form-control" placeholder="Endereço" name="endereco" value={values.endereco} 
                onChange={manipuladorInputChange} />
            </div>

            <div>
                <input type="button" value={props.idAtual === '' ? 'Salvar' : 'Atualizar'} className="btn btn-primary d-grid gap-2 col-6 mx-auto" onClick={manipuladorFormEnvio} />
            </div>       
        </form>
    )
}

export default FormularioCadastro;