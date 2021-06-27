import React from 'react'
import { useHistory } from 'react-router'

import './styles.css'

const Profile: React.FC = () => {
  const { push } = useHistory()

  return (
    <div className="containerPage containerProfile">
      <main onClick={() => push('/')}>
        <h1>Go Home</h1>

        <img src="https://avatars.githubusercontent.com/u/61882248?s=460&u=fbacf3b2ab7fbe9e721081f8774169d9f243fffc&v=4" alt="Ian Torquato" />
      </main>
    </div>
  )
}

export default Profile
