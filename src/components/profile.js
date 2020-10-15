import React from "react"
import { Link } from "gatsby"
import { useIdentityContext } from "react-netlify-identity"

const Profile = () => {
  const identity = useIdentityContext()
  const isLoggedIn = identity && identity.isLoggedIn

  console.log(identity)

  return (
    isLoggedIn && (
      <div className="dashboard-header">
        <nav>
          <Link to="/dashboard/secret" activeClassName="active">
            Secret stuff
          </Link>
          <Link to="/dashboard/base" activeClassName="active">
            See your base
          </Link>
        </nav>
        <span>TODO show login status</span>
      </div>
    )
  )
}

export default Profile
