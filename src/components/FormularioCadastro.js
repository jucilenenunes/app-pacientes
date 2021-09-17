import React, { useState } from 'react';

const FormularioCadastro = (props) => {
    //Variaveis de captura de dados
    const camposIniciaisDeValores = {
        nomeCompleto: '',
        telefone: '',
        email: '',
        endereco: '',
    }
    //Destructuring assinment (abstrair)
    let {values, setValues} = useState(camposIniciaisDeValores)

    const manipuladorInputChange = e => {
        let {name, value} = e.target

        setValues({
            ...values,
            [name]: value,
        })
    }

    const manipuladorEnvio = e => {
        e.preventDefault()
        props.addEedit(values)
    }
    
    return (
        <form autoComplete="off" onSubmit={manipuladorEnvio}>
            <div className="form-group input-group col-md-6">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>      
                </div>
        
                <input className="form-control" placeholder="Nome Completo" name="nomeCompleto" value={values.nomeCompeleto} 
                onChange={manipuladorInputChange} />
            </div>

            <div className="form-group input-group col-md-6">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-mobile-alt"></i>
                    </div>      
                </div>

                <input className="form-control" placeholder="Telefone" name="tefefone" value={values.telefone} 
                onChange={manipuladorInputChange}/>
                
            </div>

            <div className="form-group input-group col-md-6">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-envelope"></i>
                    </div>      
                </div>
                
                <input className="form-control" placeholder="Email" name="email" value={values.email} 
                onChange={manipuladorInputChange}/>
            </div>

            <div className="form-group input-group col-md-6">
                <div className="input-grou-prepend">
                        
                </div>

                <input className="form-control" placeholder="Endereço" name="endereco" value={values.endereco} 
                onChange={manipuladorInputChange} />
            </div>

            <div>
                <input type="submit" value="Save" className="btn btn-primary btn-block" />
            </div>
            

            

            

        </form>
    )
}

export default FormularioCadastro;