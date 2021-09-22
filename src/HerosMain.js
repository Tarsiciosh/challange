import { useState, useEffect } from 'react'
import HerosContext from './herosContext'
import axios from 'axios'
import HerosGrid from './HerosGrid'
import HerosPowerStats from './HerosPowerStats'
import HerosSearch from './HerosSearch'
import HeroDetails from './HeroDetails'
import { Switch, Route } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { getHerosInfo } from './features/herosSlice'


const myHerosToken = '102141048846123'

const HerosMain = ({title}) => { 
  
  const [isLoading, setIsLoading] = useState(true)
  
  const [herosId, setHerosId] = useState([]) 
  const [heros, setHeros] = useState([])

  //const searchedHeros = useSelector ((state) => state.heros.value.searchedHeros)
  const dispatch = useDispatch()

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
      } catch (error){
        console.error(error) 
      }
    }
    getHerosInfo()   
  },[herosId])

  useEffect(()=> {
    //heros update
  },[heros])

  const herosContextValue = {
    herosToken: myHerosToken, 
    herosId: herosId,
    setHerosId: setHerosId,
    heros: heros,
  }

  return (        
    <HerosContext.Provider value={herosContextValue}>
      <Switch>
        <Route path="/:id">
          <HeroDetails/>
        </Route>
        <Route path="/">  
          { !isLoading ? (
            <div style={{margin:'3rem'}}> 
              <p className="display-5"> {title} </p>
              <HerosGrid />
              <HerosPowerStats /> 
              <HerosSearch />
          
              <button onClick={()=> dispatch(getHerosInfo('power'))}>Dispatch</button>
            </div> 
            ) : (<p className="display-6" style={{margin:'1rem'}}>cargando...</p>)
          }
        </Route>
      </Switch>
    </HerosContext.Provider>
  )
}

export default HerosMain


/*
{

  searchedHeros?.map (hero =>
    <p> {hero?.name} </p>
    )  
  }

 */