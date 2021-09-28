import { useParams } from "react-router"
import { useSelector } from 'react-redux'

const HeroDetails = () =>{

  const heros = useSelector ((state) => state.heros.owned)
  const { id } = useParams()
  const hero = heros.find (hero => hero.id === id)

  return (
    typeof hero !== 'undefined' ?
      <div style={{
        "display": "flex", 
        "flexDirection": "column", 
        "alignItems":"center",
        "margin": "2rem" 
      }}>
        <h4 className="display-5" >{hero.name}</h4>
        <div className="card" style={{width: "30rem", margin:30}}>
          <img className="card-img-top" 
            src={hero.image.url} 
            alt="hero"  
          />
          <div className="card-body">   
            <ul className="list-group">
              <li className="list-group-item" key="1"> {`Peso: ${hero.appearance.weight[1]}`} </li>
              <li className="list-group-item" key="2"> {`Altura: ${hero.appearance.height[1]}`}</li>
              <li className="list-group-item" key="3"> {`Nombre: ${hero.name}`}</li>
              <li className="list-group-item" key="4"> {`Alias: ${hero.biography.aliases[0]}`}</li>
              <li className="list-group-item" key="5"> {`Color de ojos: ${hero.appearance["eye-color"]}`}</li>
              <li className="list-group-item" key="6"> {`Color de cabello: ${hero.appearance["hair-color"]}`}</li>
              <li className="list-group-item" key="7"> {`Lugar de trabajo: ${hero.work.occupation}`}</li>
            </ul> 
          </div>
        </div>
      </div> 
    : <h4 style= {{margin: '1rem'}}> No tienes este héroe! </h4>
  )
}

export default HeroDetails