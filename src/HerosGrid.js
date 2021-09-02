import Hero from './Hero'

const HerosGrid = ({ heros, herosId, setHerosId }) => {
  return (
    <div className = "container">
      <div className ="row">
        {heros.map(hero => (
          <div className ="col" key={hero.id}>
            <Hero hero={hero} herosId={herosId} setHerosId={setHerosId} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HerosGrid