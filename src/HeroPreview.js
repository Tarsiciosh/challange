import { useDispatch } from 'react-redux'
import { add } from './features/herosSlice'

const HeroPreview = ({ hero }) => {
  
  const dispatch = useDispatch()
 
  return (
    <>
      <div className="card" style={{width: "10rem", marginTop:"2rem"}}>
        <img className="card-img-top" 
          src={hero.image.url} 
          alt="hero"  
        />
        <div className="card-body">
          <h5 className="card-title">{hero.name}</h5>
          <br/>        
          <button className="btn btn-primary" 
            onClick = {()=>{      
                dispatch(add(hero.id))             
            }}> 
            Agregar 
          </button>   
        </div>
      </div>
    </>
  )
}

export default HeroPreview