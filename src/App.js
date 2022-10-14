import "./App.css";
import { getAuth } from "firebase/auth";
import app from "./firebase/firebase.init";
import RegisterReactBootstrap from "./Components/RegisterReactBootstrap/RegisterReactBootstrap";

const auth = getAuth(app);

const handleSignUp = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email, password);
};

const handleEmailChange = (event) => {
  console.log(event.target.value);
};

const handlePasswprdChange = (event) => {
  console.log(event.target.value);
};

function App() {
  return (
    <div className="">
      <RegisterReactBootstrap></RegisterReactBootstrap>
    </div>
  );
}

export default App;
