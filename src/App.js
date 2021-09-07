import HerosMain from './HerosMain'
import Login from './HerosLogin'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import useToken from './useToken'

const App = () => {
  
  const [token, setToken] = useToken() 

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/"> 
          <HerosMain title={"Bienvenido a tu pagina de héroes!"}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App