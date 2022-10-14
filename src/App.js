
import './App.css';
import {getAuth} from 'firebase/auth'
import app from './firebase/firebase.init';


const auth = getAuth(app); 

const handleSignUp = (event) =>{
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(event.target.password.value);
}
function App() {
  return (
    <div className="App">
      <form onSubmit={handleSignUp}>
        <input type="email" name="email" id="" placeholder='Email-Please' />
        <br />
        <input type="password" name="password" id="" placeholder='Password-Here' />
        <br/>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
