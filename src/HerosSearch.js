import { Formik, Form } from "formik"
import * as Yup from 'yup'
import HeroPreview from "./HeroPreview"
import { SearchTextInput } from "./TextImputs"

import { useSelector , useDispatch } from 'react-redux'
import { getHerosInfo } from './features/herosSlice'

const HerosSearch = () => {

  const searchedHeros = useSelector ((state) => state.heros.searched)
  const dispatch = useDispatch()

  const status = useSelector (state => state.heros.status)
  const isLoading = status === 'pending' ? true : false 
  
  return (
    <>
      <Formik
        initialValues={{ 
          name: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(20, 'Tiene que ser de 20 caracteres o menos') 
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            //getHeros(values.name)
            dispatch(getHerosInfo(values.name))
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form style={{marginTop:"2rem"}} >
          <p className="display-6">Busca tu héroe:</p>  
          <SearchTextInput 
            label=""
            name="name"
            type="text"
            placeholder="Superman"   
          />
          <button className="btn btn-primary" type="submit">Buscar</button>  
        </Form>
      </Formik>
      <br/>
      {isLoading ?  
        <p className="display-8" style={{margin:'0.5rem'}}>cargando...</p>
        : <> {
          typeof searchedHeros !== 'undefined' ? (
          <div className="container">
            <div className ="row">
              { searchedHeros.map( searchedHero => (
                <div className ="col" key={searchedHero.id}>
                  <HeroPreview hero={searchedHero} />
                </div>
              ))}
            </div>
          </div>
          ) : "No se encontraron resultados"}
        </> 
      }
    </> 
  )
}

export default HerosSearch