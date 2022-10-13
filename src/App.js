
import './App.css';
import {getAuth} from 'firebase/auth'
import app from './firebase/firebase.init';


const auth = getAuth(app); 
function App() {
  return (
    <div className="App">
      <form>
        <input type="email" name="" id="" placeholder='Email-Please' />
        <br />
        <input type="password" name="" id="" placeholder='Password-Here' />
      </form>
    </div>
  );
}

export default App;
