//import { useState } from "react"
import { Formik, Form } from "formik"
import * as Yup from 'yup'
import axios from 'axios'
import HeroTextInput from "./HeroTextImput"

const Login = ({ setToken }) => {
  
  //const [authToken,setAuthToken] = useState()


  async function submitInfo (email,password) {   
    try {      
      const response = await axios.post(
        `http://challenge-react.alkemy.org`, {
          email: email,
          password: password
      })
      setToken(response.data.token)
      //console.log(authToken)
      //localStorage.setItem('token', authToken)
    } catch (error){
      console.error(error)
    }
  }

  return (
    <Formik
      initialValues={{ 
        email: 'challenge@alkemy.org',
        password: 'react',       
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Email inválido')
          .required('Requerido'),
        password: Yup.string()
          .max(15, 'tiene que ser como maximo de 15 caracteres')
          .required('Requerido'),        
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
        
          submitInfo(values.email, values.password)
          setSubmitting(false);
        }, 400);
      }}
    >
      <> 
      <div style={{
          "display": "flex", 
          "flex-direction": "column", 
          "align-items":"center", 
          "padding":"5rem"}}>
        Ingrese su usuario y contraseña:
        <Form style={{marginTop:"2rem"}} >
          <HeroTextInput 
            label="Email"
            name="email"
            type="email"
            placeHolder="challenge@alkemy.org"   
          />
          <HeroTextInput 
            label="Password" 
            name="password"
            type="password"
            placeholder=""   
          />
          <button className="btn btn-primary" type="submit">Enviar</button>   
        </Form>
      </div>
      </>
    </Formik>
  )
}

export default Login