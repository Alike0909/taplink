import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'

// * COMPONENTS
import { Dashboard } from './containers/dashboard'
import { GalleryDetailed } from './components/galleryDetailed'
import { PlayerDetailed } from './components/playerDetailed'
import { EducationDetailed } from './components/educationDetailed'
import { JobsDetailed } from './components/jobsDetailed'
import { PortfolioDetailed } from './components/portfolioDetailed'
import { WishList } from './containers/wishList'

import { ExternalRedirect } from './containers/externalRedirect'

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
          <Route path={'/jobs'} component={(props) => <JobsDetailed {...props}/>} />
          <Route path={'/portfolio'} component={(props) => <PortfolioDetailed {...props}/>} />
          <Route path="/wishes" component={(props) => <WishList {...props} />} />
          <Route exact path="/:id" component={(props) => <ExternalRedirect exact {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}


function IndexRedirect() {
  return <Redirect to="/dashboard/home" />
}

export default App;