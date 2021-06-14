import React, { useState } from "react"
import { Card, Alert, Button } from "react-bootstrap" 
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"

export default function Home() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  
    // handle logout
    async function handleLogout() {
      setError("") // empty
  
      try {
        // wait for logout
        await logout()
        // go back to login page
        history.push("/login")
      } 
      catch {
        //error message
        setError("ERROR: failed to log out of account")
      }
    }
  
    return (
      <>
        <Card>
          <Card.Body>
            {/*HOME PAGE */}
            <h2 className="div-0">Home</h2>

            {/* alert if cant log out*/}
            {error && <Alert variant="danger">{error}</Alert>}
            {/* welcome user with email*/}
            <div className = "div-2">Hello {currentUser.email}</div> 
            
          </Card.Body>
        </Card>
        {/* log out link */}
        <div className="div-3">
          <Button variant="primary" onClick={handleLogout}> Log Out</Button>
        </div>
      </>
    )
  }
