import {auth, googleProvider} from "./firebase";
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn =  async () => {
    try { await createUserWithEmailAndPassword(auth, email, password);} 
    catch (error) {console.log(error);}
  };
  const signInWithGoogle = async () => {
    try { await signInWithPopup(auth, googleProvider); }
    catch (error) { console.log(error); }
  };
  const logout = async () => {
    try { await signOut(auth); }
    catch (error) { console.log(error); }
  };
  return (
    <div>
      <input type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signIn}>Sign In</button>
      <button onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
  );
};