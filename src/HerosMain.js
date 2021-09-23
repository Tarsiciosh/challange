import { useState } from 'react'
import HerosContext from './herosContext'
import HerosGrid from './HerosGrid'
import HerosPowerStats from './HerosPowerStats'
import HerosSearch from './HerosSearch'
import HeroDetails from './HeroDetails'
import { Switch, Route } from 'react-router-dom'

import { useSelector } from 'react-redux'

const HerosMain = ({title}) => { 
  
  // to-do change is loading mechanism
  const [isLoading] = useState(false) 
  const [herosId, setHerosId] = useState([]) 

  const heros = useSelector ((state) => state.heros.values.heros)
  
  const herosContextValue = { 
    herosId: herosId,
    setHerosId: setHerosId,
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
              <HerosGrid heros={heros} />
              <HerosPowerStats heros={heros}/> 
              <HerosSearch />
            </div> 
            ) : (<p className="display-6" style={{margin:'1rem'}}>cargando...</p>)
          }
        </Route>
      </Switch>
    </HerosContext.Provider>
  )
}

export default HerosMain