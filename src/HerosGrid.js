import { useContext } from 'react'
import HerosContext from './herosContext'
import Hero from './Hero'

const HerosGrid = ({ herosId, setHerosId }) => {
  
  //setHerosId(['720','255','322'])
  const context = useContext (HerosContext)
  const heros = context.heros

  return (
    <>
      { heros.length !==0 ? (
        <div className = "container">
          <div className ="row">
            {heros?.map(hero => (
              <div className ="col" key={hero.id}>
                <Hero hero={hero} herosId={herosId} setHerosId={setHerosId} />
              </div>
            ))}
          </div>
        </div>
        ) : "No tienes héroes que mostrar"
      }
    </>
  )

}

export default HerosGrid