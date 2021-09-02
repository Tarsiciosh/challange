import HeroMain from './HeroMain'
import Login from './HerosLogin'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import useToken from './useToken'

const App = () => {
  
  const [token, setToken] = useToken() 

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/"> 
          <HeroMain title= {"Bienvenido a tu pagina de héroes!"}/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App