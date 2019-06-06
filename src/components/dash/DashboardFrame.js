import React from 'react'
import {Row, Col} from 'reactstrap'
import axios from 'axios'

import LeftBar from './LeftBar'
import RightBar from './RightBar'
import { decodeToken } from '../../lib/auth'
import { handleChange } from '../../lib/common'

class DashboardFrame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleChange = handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('/api/clues')
      .then(res => {
        this.setState({ clue: res.data })
      })
  }

  handleSubmit(answer) {
    const guess = this.state.guess
    if (answer === guess) {
      alert('correct')
    } else {
      alert('wrong')
    }
  }

  render() {
    console.log('clue', this.state.clue)
    return (
      <Row className="dash">
        <Col xs={3} sm={3} md={3} lg={2}>
          <LeftBar />
        </Col>
        <Col xs={6} sm={6} md={6} lg={8}>
          <article className="dash-main">
            <h1>{decodeToken().username}'s</h1>
            <h2>Private investigations</h2>
            {this.state.clue && this.state.clue.map(
              clue =>
                <div key={clue._id}>
                  <p>{clue.question}</p>
                  <p>{clue.answer}</p>
                  <form>
                    <input type="text" name="guess" onChange={this.handleChange}/>
                    <button onClick={() => this.handleSubmit(clue.answer)}>click</button>
                  </form>
                </div>
            )}
          </article>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2}>
          <RightBar />
        </Col>
      </Row>
    )
  }
}
export default DashboardFrame;
