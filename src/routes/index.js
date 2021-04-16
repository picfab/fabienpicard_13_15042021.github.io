/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-children-prop */
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/**
 * Create a accordion
 * @module Routes
 * @component
 * @category Routes
 * @param {object} props
 * @prop {object} props.urls Object with all components's views
 */
export default function Routes({ urls }) {
  const { home, signin, user, transactions } = urls
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

Routes.propTypes = {
  /**
   * Object with all components's views
   */
  // eslint-disable-next-line react/forbid-prop-types
  urls: PropTypes.object.isRequired,
}
