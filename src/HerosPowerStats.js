import { useState, useEffect } from "react";
import HeroPowerStat from "./HeroPowerStat";

const HerosPowerStats = ({heros}) => {

  const [ps, setPs] = useState ([])
  
  useEffect ( () => {
    let newPs = {
      Inteligencia: 0, 
      Fuerza: 0, 
      Velocidad : 0, 
      Durabilidad : 0, 
      Potencia : 0, 
      Combate : 0
    }

    heros.forEach(hero => {
      newPs.Inteligencia = newPs.Inteligencia + parseInt(hero.powerstats.intelligence)
      newPs.Fuerza = newPs.Fuerza + parseInt(hero.powerstats.strength)
      newPs.Velocidad = newPs.Velocidad + parseInt(hero.powerstats.speed)
      newPs.Durabilidad = newPs.Durabilidad + parseInt(hero.powerstats.durability)
      newPs.Potencia = newPs.Potencia + parseInt(hero.powerstats.power)
      newPs.Combate = newPs.Combate + parseInt(hero.powerstats.combat)
    })

    var statsArray = []
    for (const property in newPs){
      statsArray = [...statsArray,{
        stat: property,
        value: newPs[property]
      }]
    }
    statsArray.sort((a,b) => (b.value - a.value))
    setPs(statsArray)
  },[heros])

  return (
    <>
      <p className="display-6">Capacidades grupales: </p>
      <ul className="list-group" style={{width: "20rem"}}>
        {ps.map(p => (
          <HeroPowerStat data={p} key={p.stat}/>
        ))}
      </ul>
    </>
  )
}

export default HerosPowerStats