import { Formik, Form } from "formik"
import * as Yup from 'yup'
import axios from 'axios'
import TextInput from "./TextImputs"

const Login = ({ setToken }) => {
  
  async function submitInfo (email,password) {   
    try {      
      const response = await axios.post(
        `http://challenge-react.alkemy.org`, {
          email: email,
          password: password
      })
      setToken(response.data.token)
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
          "flexDirection": "column", 
          "alignItems":"center", 
          "padding":"5rem"}}>
        <p>Ingrese su usuario y contraseña:</p> 
        <Form style={{marginTop:"2rem"}} >
          <TextInput 
            label="Email"
            name="email"
            type="email"
            placeholder="challenge@alkemy.org"   
          />
          <TextInput 
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