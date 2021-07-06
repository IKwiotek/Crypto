import React from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" // npm i react-router-dom
import Home from "./components/Home"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import Register from "./components/Register"
import { HeaderToolbar } from "./components/Header"
import Profile from "./components/Profile"
import { FirstPartyEducation } from "./components/FirstPartyEducation"
import { ThirdPartyEducation } from "./components/ThirdPartyEducation"
import ProfileChange from "./components/ProfileChange"
import Help from "./components/Faq"

function App() {
  return (
    //container to format register page 
    <Container className="container">
      <AuthProvider>
        <Router>
          <HeaderToolbar />
          <div id="routerContainer" className="width100" >
            {/*switch determines which route we are currently on */}
            <Switch>
              <Route path="/login"> <Login /> </Route>
              <Route path="/register"> <Register /> </Route>
              <Route path="/forgotpassword"> <ForgotPassword /> </Route>
              {/*locking down profile*/}
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/profilechange" component={ProfileChange} />
              <Route path="/firstpartyeducation"> <FirstPartyEducation /> </Route>
              <Route path="/thirdpartyeducation"> <ThirdPartyEducation /> </Route>
              <Route path="/help"> <Help /> </Route>
              <Route path="/"> <Home /> </Route>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </Container>
  )
}

export default App;
