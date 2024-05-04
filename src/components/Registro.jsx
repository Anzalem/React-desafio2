
import Formulario from './Formulario'
import SocialButton from './SocialButton'

export default function Registro() {


  return (
    <>
      <div class = "contenedor">
        <h1>Crea una cuenta</h1>
        <div class = "iconContainer">
            <SocialButton img = "./src\assets\img\linkedin.png" />
            <SocialButton img = "./src\assets\img\github.png" />
            <SocialButton img = "./src\assets\img\facebook.png" />
        </div>
        <h4>O usa tu email para registrarte</h4>
        <Formulario />    
      </div>
    </>
  )
}

