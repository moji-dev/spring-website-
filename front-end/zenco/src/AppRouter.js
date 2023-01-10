import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import App from "./App";
import Messages from "./components/Registration";
import Home from "./components/Home";
import Forum from "./components/Forum";
import Contacts from "./components/Contacts";
import Login from "./components/Login";
import useToken from "./useToken";
import Registration from "./components/Registration";

export default function AppRouter(){
  const { token, setToken } = useToken();

  
  return (
  <Router>
    <Routes>
        <Route path={'/'} element={<App/>}>
          <Route index element={<Home />} />
          <Route path={'/Registration'} element={<Registration/>}/>
          <Route path={'/Forum'} element={<Forum />}/>
          <Route path={'/Contacts'} element={<Contacts />}/>
          <Route path={'/Login'} element={<Login  setToken={setToken}/>}/>
        </Route>
      </Routes>
    </Router>
  )
}