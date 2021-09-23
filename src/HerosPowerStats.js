import { useState, useEffect } from "react";
import HeroPowerStat from "./HeroPowerStat";

const HerosPowerStats = ({ heros }) => {

  const [powerStats, setPowerStats] = useState ([])
  
  useEffect ( () => {
    let totalPs = {
      Inteligencia: 0, 
      Fuerza: 0, 
      Velocidad : 0, 
      Durabilidad : 0, 
      Potencia : 0, 
      Combate : 0
    }

    heros.forEach(hero => {
      totalPs.Inteligencia = totalPs.Inteligencia + parseInt(hero.powerstats.intelligence)
      totalPs.Fuerza = totalPs.Fuerza + parseInt(hero.powerstats.strength)
      totalPs.Velocidad = totalPs.Velocidad + parseInt(hero.powerstats.speed)
      totalPs.Durabilidad = totalPs.Durabilidad + parseInt(hero.powerstats.durability)
      totalPs.Potencia = totalPs.Potencia + parseInt(hero.powerstats.power)
      totalPs.Combate = totalPs.Combate + parseInt(hero.powerstats.combat)
    })

    var statsArray = []
    for (const property in totalPs){
      statsArray = [...statsArray,{
        stat: property,
        value: totalPs[property]
      }]
    }
    statsArray.sort((a,b) => (b.value - a.value))
    setPowerStats(statsArray)
  },[heros])

  return (
    <>
      <p className="display-6">Capacidades grupales: </p>
      <ul className="list-group" style={{width: "20rem"}}>
        {powerStats.map(powerStatData => (
          <HeroPowerStat data={powerStatData} key={powerStatData.stat}/>
        ))}
      </ul>
    </>
  )
}

export default HerosPowerStats