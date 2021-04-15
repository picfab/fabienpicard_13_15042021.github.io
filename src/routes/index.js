/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-children-prop */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function Routes(props) {
  const { home, signin, user, transactions } = props.urls
  return (
    <Router>
      <Switch>
        <Route exact path='/signin' children={signin} />
        <Route exact path='/profile' children={user} />
        <Route exact path='/transactions' children={transactions} />
        <Route exact path='/' children={home} />
      </Switch>
    </Router>
  )
}
