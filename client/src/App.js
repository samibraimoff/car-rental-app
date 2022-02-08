import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';

const ProtectedRoute = (props) => {
  if (localStorage.getItem('user')) {
    return <Route {...props} />;
  } else {
    return <Redirect to='/login' />;
  }
};

function App() {
  return (
    <Router>
      <ProtectedRoute path='/' exact component={Home} />
      <ProtectedRoute path='/booking/:id' exact component={Booking} />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
    </Router>
  );
}

export default App;
