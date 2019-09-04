import React from 'react'
import { Container } from 'semantic-ui-react'

const Footer = (props) => {

  const style = {
    margin: 10,
    padding: 5
  }
  const style2 = {
    marginTop: 100
  }

  return (
    <div style={style2}>
      <Container>
        <div style={style}>Finn the Tutor - Your helper to practice Finnish! by <em>Salla Tero-Anandamurthy</em>
        </div>
      </Container>
    </div>
  )
}

export default Footer