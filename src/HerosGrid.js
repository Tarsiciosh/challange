import Hero from './Hero'

const HerosGrid = ({ heros, herosId, setHerosId }) => {
  
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
        ) : "Aun no tienes héroes"
      }
    </>
  )

}

export default HerosGrid