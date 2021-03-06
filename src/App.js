import './App.css';
import Router from './Router'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import NavBar from './containers/NavBar'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar className='nav-bar'/>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
