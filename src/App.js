import React, { useEffect } from 'react'
//import MenuComponent from './src/components/MenuComponent'
import Footer from './components/Footer'
import { initializeQuestions } from './reducers/questionsReducer'
import { connect } from 'react-redux'
//import { initializeUser } from './src/reducers/loggedUserReducer'
//import { initializeUsers } from './src/reducers/userlistReducer'
import { BrowserRouter as Router } from 'react-router-dom'

const App = (props) => {
  console.log('app alkoi')

  //Haetaan kannasta kysymykset
  useEffect(() => {
    props.initializeQuestions()
  }, [props])

  return (
    <Router>
      <Footer />
    </Router>
  )
}

const mapDispatchToProps = {
  initializeQuestions
}
export default connect(null, mapDispatchToProps)(App)