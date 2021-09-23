import Hero from './Hero'

const HerosGrid = ({ heros }) => {
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