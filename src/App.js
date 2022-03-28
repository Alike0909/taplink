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
import { TodoList } from './containers/todoList'
import { TodoReport } from './components/todoReport'

import { ExternalRedirect } from './containers/externalRedirect'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={IndexRedirect} />
          <Route path="/dashboard" component={(props) => <Dashboard {...props} />} />
          <Route exact path="/gallery" component={(props) => <GalleryDetailed {...props} />} />
          <Route exact path="/music" component={(props) => <PlayerDetailed {...props}/>} />
          <Route exact path="/education" component={(props) => <EducationDetailed {...props}/>} />
          <Route exact path="/jobs" component={(props) => <JobsDetailed {...props}/>} />
          <Route exact path="/portfolio" component={(props) => <PortfolioDetailed {...props}/>} />
          <Route exact path="/wishes" component={(props) => <WishList {...props} />} />
          <Route exact path="/todo" component={(props) => <TodoList {...props} />} />
          <Route exact path="/todo/report" component={(props) => <TodoReport {...props} />} />
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