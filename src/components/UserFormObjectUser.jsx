import React, { useState } from 'react'
import LabelForm from './LabelForm';


const UserFormObjectUser = () => {
    const submitForm = (event) => {
        event.preventDefault()
        console.log("submit")
    }

const [nome, setNome] = useState('rogerio ')
const [email, setEmail] = useState('exemplo@gmail.com')
const [senha, setSenha] = useState('44345te4 ')
   
return (
        <div className='container'>

            <h1>cadastro de usuario</h1>
            <form className='Norme' onSubmit={submitForm}>

                <div className="col-md-6">

                    <LabelForm name='Nome' />
                    <input type='text'
                     name='nome' 
                     id='nome'
                      className='form-control' 
                      value={nome}
                      onChange={e => setNome(e.target.value)}
                      
                      />
                </div>

                <div className="row g-3">
                    <LabelForm name='Email' />
                    <input type="text"
                     name='email' 
                     id='email'
                      className='form-control'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      
                      
                      />
                </div>

                <div className="row g-3">
                    <LabelForm name='Senha' />
                    <input type="text"
                     name='senha' 
                     id='senha' 
                     className='form-control'
                     onChange={e => setSenha(e.target.value)}
                     value={senha}
                     
                     />
                </div>

                <button type='submit' className='btn btn-primary'>enviar</button>



            </form>

        </div>
    )
}

export default UserFormObjectUser