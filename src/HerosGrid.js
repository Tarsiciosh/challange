import { useContext } from 'react'
import HerosContext from './herosContext'
import Hero from './Hero'

const HerosGrid = () => {

  const context = useContext (HerosContext)
  const heros = context.heros

  return (
    <>
      { heros.length !==0 ? (
        <div>
          <div className ="row">
            {heros?.map(hero => (
              <div className ="col" key={hero.id}>
                <Hero hero={hero}/>
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