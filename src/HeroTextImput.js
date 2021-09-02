import { useField } from 'formik'

const HeroTextInput = ({ label, ...props }) => { 
  const [field, meta] = useField(props)  
    return (
      <>            
      <div className="mb-3">
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="form-control" {...field} {...props}/> 
        {meta.touched && meta.error ? (
          <div className="form-text">{meta.error}</div>
        ) : null }
      </div>
      </>
    ) 
  }
  
  export default HeroTextInput