import { useState } from 'react'


export default function Formulario() {
    const[nombre, setNombre] = useState("")
    const[email, setEmail] = useState("")
    const[pass, setPass] = useState("")
    const[conPass, setConPass] = useState("")
    
    const[error, setError] = useState(false)

    const validarDatos = (e) =>{
        e.preventDefault()

        if(nombre === ""|| email === "" || pass === "" || conPass === ""){
            alert('Todos los campos son obligatorios')
            setError(true)
            return
        }
        
    }

  return (
    <>
      <form class = "formulario" onSubmit={validarDatos(e)}>
            <div class="input-group">
                <input onChange = {(event) => setNombre(event.target.value)} type="text" placeholder="Nombre" required/>
            </div>
            <div class="input-group">
                <input onChange = {(event) => setEmail(event.target.value)} type="email" placeholder="tuemail@ejemplo.com" required/>
            </div>
            <div class="input-group">
                <input onChange = {(event) => setPass(event.target.value)} type="password" placeholder="Contraseña" required/>
            </div>
            <div class="input-group">
                <input onChange = {(event) => setConPass(event.target.value)} type="password" placeholder="Confirma tu Contrasena" required/>
            </div>
            <button type='submit'>Registrarse</button>
        </form>
    </>
  )
}