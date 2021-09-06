import { useField } from 'formik'

const TextInput = ({ label, ...props }) => { 
  
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

export const SearchTextInput = ({ label, ...props }) => { 
  
  const [field, meta] = useField(props)  
  
  return (
    <>            
      <div className="mb-3">
        <input className="form-control" {...field} {...props}/> 
        {meta.touched && meta.error ? (
          <div className="form-text">{meta.error}</div>
        ) : null }
      </div>
    </>
  ) 
}
  
export default TextInput