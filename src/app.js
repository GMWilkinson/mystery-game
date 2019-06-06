import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import AuthRegister from './components/auth/Register'
import AuthLogin from './components/auth/Login'
import Home from './components/Home'
import DashboardFrame from './components/dash/DashboardFrame'
import './scss/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <div>
            <Switch>
              <Route exact path='/register' component={AuthRegister}/>
              <Route exact path='/login' component={AuthLogin}/>
              <Route exact path='/' component={Home}/>
              <Route exact path='/mission' component={DashboardFrame}/>
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
