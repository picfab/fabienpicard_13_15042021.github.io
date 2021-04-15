import './App.css'
import { Provider } from 'react-redux'
import Home from './Views/Home'
import SignIn from './Views/SignIn'
import User from './Views/User'
import Transactions from './Views/Transactions'
import Routes from './routes'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Routes
        urls={{
          home: <Home />,
          signin: <SignIn />,
          user: <User />,
          transactions: <Transactions />,
        }}
      />
    </Provider>
  )
}

export default App
