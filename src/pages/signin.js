import React from "react"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"


const SignIn = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

}
export default SignIn
