import { useState, useEffect } from 'react'
import axios from 'axios'
import HerosGrid from './HerosGrid'
import HerosPowerStats from './HerosPowerStats'
import HeroSearch from './HeroSearch'

const myHerosToken = '102141048846123'

const HeroMain = ({title}) => { 
  const [isLoading, setIsLoading] = useState(true)
  const [herosId, setHerosId] = useState([644])
  const [heros, setHeros] = useState([])

  useEffect(() => { 
    async function getHerosInfo () {   
      try {      
        var fetchedHeros = []
        for (var i = 0; i< herosId.length; i++){
          var response = await axios.get(
            `https://superheroapi.com/api/${myHerosToken}/${herosId[i]}/`
          )
          fetchedHeros = [...fetchedHeros, response.data]
        }
        setHeros(fetchedHeros)
        setIsLoading(false) 
      } catch (error){
        console.error(error)
      }
    }
    getHerosInfo()   
  })

  return (        
    <>
      { !isLoading ? (
        <div style={{margin:'3rem'}}> 
          <p className="display-5"> {title} </p>
            <HerosGrid heros={heros} herosId={herosId} setHerosId={setHerosId} />
            <HerosPowerStats heros={heros}/> 
            <HeroSearch token={myHerosToken} heros={heros} herosId={herosId} setHerosId={setHerosId} />
        </div> 
        ) : (<p className="display-6" style={{margin:'1rem'}}>cargando...</p>)
      }
    </>
  )
}

export default HeroMain

/*
 { !isLoading ? (
        <div style={{margin:'3rem'}}> 
          <p className="display-5"> {title} </p>
            <HerosGrid heros={heros} herosId={herosId} setHerosId={setHerosId} />
            <HerosPowerStats heros={heros}/> 
            <HeroSearch token={token} heros={heros} herosId={herosId} setHerosId={setHerosId} />
        </div> 
        ) : ( < )
      }
*/