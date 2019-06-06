import React from 'react'
import { Button } from 'reactstrap'

class LeftBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <main className="left-bar">
        <div className="caller">
        </div>
        <p>Caller: </p>
        <p>Trace?</p>
      </main>
    )
  }
}
export default LeftBar
