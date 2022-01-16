import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'

// * COMPONENTS
import { Dashboard } from './containers/dashboard'
import { GalleryDetailed } from './components/galleryDetailed'
import { PlayerDetailed } from './components/playerDetailed'
import { EducationDetailed } from './components/educationDetailed'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={IndexRedirect} />
          <Route path={'/dashboard'} component={(props) => <Dashboard {...props} />} />
          <Route path={'/gallery'} component={(props) => <GalleryDetailed {...props} />} />
          <Route path={'/music'} component={(props) => <PlayerDetailed {...props}/>} />
          <Route path={'/education'} component={(props) => <EducationDetailed {...props}/>} />
        </Switch>
      </Router>
    </div>
  );
}


function IndexRedirect() {
  return <Redirect to="/dashboard/home" />
}

export default App;