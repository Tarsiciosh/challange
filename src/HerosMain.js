import { useState, useEffect } from 'react'
import axios from 'axios'
import HerosGrid from './HerosGrid'
import HerosPowerStats from './HerosPowerStats'
import HeroSearch from './HeroSearch'
import { Switch, Route } from 'react-router-dom'
import HeroDetails from './HeroDetails'

const myHerosToken = '102141048846123'

const HerosMain = ({title}) => { 
  
  const [isLoading, setIsLoading] = useState(true)
  const [herosId, setHerosId] = useState([]) 
  const [heros, setHeros] = useState([])

  useEffect(() => { 
    async function getHerosInfo () {
      try {
        setIsLoading(true)    
        var fetchedHeros = []
        for (var i = 0; i< herosId.length; i++){
          var response = await axios.get(
            `https://superheroapi.com/api/${myHerosToken}/${herosId[i]}/`
          )
          fetchedHeros = [...fetchedHeros, response.data]
        }
        setHeros(fetchedHeros)      
        setIsLoading(false)
        console.log('HerosMain: herosId changed',herosId) 
      } catch (error){
        console.error(error) 
      }
    }
    getHerosInfo()   
  },[herosId])

  useEffect(()=> {
    console.log("HerosMain: heros array changed")
  },[heros])

  return (        
    <>
      <Switch>
        <Route path="/:id">
          <HeroDetails/>
        </Route>
        <Route path="/">  
          { !isLoading ? (
            <div style={{margin:'3rem'}}> 
              <p className="display-5"> {title} </p>
              <HerosGrid heros={heros} herosId={herosId} setHerosId={setHerosId} />
              <HerosPowerStats heros={heros}/> 
              <HeroSearch token={myHerosToken} heros={heros} herosId={herosId} setHerosId={setHerosId} />
            </div> 
            ) : (<p className="display-6" style={{margin:'1rem'}}>cargando...</p>)
          }
        </Route>
      </Switch>
    </>
  )
}

export default HerosMain