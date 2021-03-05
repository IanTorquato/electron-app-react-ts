import React from 'react'
import { useHistory } from 'react-router'

import './styles.css'

const Home: React.FC = () => {
  const { push } = useHistory()

  return (
    <div className="containerPage containerHome">
      <main onClick={() => push('profile')}>
        <h1>Go Profile</h1>

        <img src="https://image.flaticon.com/icons/png/512/2593/2593489.png" alt="Home" />
      </main>
    </div>
  )
}

export default Home