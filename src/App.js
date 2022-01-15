import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'

// * COMPONENTS
import { Dashboard } from './containers/dashboard'
import { GalleryDetailed } from './components/galleryDetailed'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={IndexRedirect} />
          <Route path={'/dashboard'} component={(props) => <Dashboard {...props} />} />
          <Route path={'/gallery'} component={(props) => <GalleryDetailed {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}


function IndexRedirect() {
  return <Redirect to="/dashboard/home" />
}

export default App;