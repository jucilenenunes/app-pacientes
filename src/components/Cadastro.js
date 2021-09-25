import React, { useState, useEffect} from 'react'
import FormularioCadastro from './FormularioCadastro'
import Cabecalho from './Cabecalho'
import Tabela from './Tabela'
import fireDb from '../firebase'

const Cadastro = () => {
    const [dadosPacientes, setDadosPacientes] = useState({})
    const [idAtual, setIdAtual] = useState('')

    useEffect( () => {
        fireDb.child('pacientes').on('value', dbPhoto => {
            if(dbPhoto.val() != null) {
                setDadosPacientes({
                    ...dbPhoto.val()
                })
            }else{
                setDadosPacientes({})
            } 
        })
    }, [])

    const addEedit = obj => {
        if(idAtual === '') {
            fireDb.child('pacientes').push(
                obj,
                error => {
                    if(error){
                        console.log(error)
                    }else {
                        setIdAtual('')
                    }
                }
            )
        }else {
            fireDb.child(`pacientes/${idAtual}`).set(
                obj,
                err => {
                    if(err) {
                        console.log(err)
                    }else {
                        setIdAtual('')
                    }
                }

            )
        }
        
    }

    const deletePaciente = key => {
        if(window.confirm('Deseja realmente deletar esse cadastro?')) {
            fireDb.child(`pacientes/${key}`).remove(
                err => {
                    if(err)
                        console.log(err)
                }
            )
        }   
    }

    return (
        <div>
            <Cabecalho />
            <div className="row">
                <div className="col-md-5">
                <FormularioCadastro {...({addEedit, idAtual, dadosPacientes})} />
                </div>
                <div className="col-md-7">
                    <Tabela dadosPacientes={dadosPacientes} setIdAtual={setIdAtual} deletePaciente={deletePaciente} />
                </div>
            </div>
        </div>
    )
}

export default Cadastro;