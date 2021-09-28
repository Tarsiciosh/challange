import HerosGrid from './HerosGrid'
import HerosPowerStats from './HerosPowerStats'
import HerosSearch from './HerosSearch'
import HeroDetails from './HeroDetails'
import { Switch, Route } from 'react-router-dom'

import { useSelector } from 'react-redux'

const HerosMain = ({ title }) => { 

  const heros = useSelector (state => state.heros.owned)

  return (        
    <Switch>
      <Route path="/:id">
        <HeroDetails/>
      </Route>
      <Route path="/">  
        <>
          <div style={{margin:'3rem'}}> 
            <p className="display-5"> {title} </p>
            <HerosGrid heros={heros} />
            <HerosPowerStats heros={heros}/> 
            <HerosSearch />
          </div> 
        </>
      </Route>
    </Switch>
  )
}

export default HerosMain