import React from 'react'
import "./App.css"
import Videos from './components/Videos/Videos'

const videos=["Udemy","Youtube","Tutorial"]
const App = () => {
  return (
    <div className='app'>
      <Videos videos={videos} />
    </div>
  )
}

export default App
