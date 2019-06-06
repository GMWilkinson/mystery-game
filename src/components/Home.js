import React from 'react'
import { Button } from 'reactstrap'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <main className="home-main columns is-multiline">
        <div className="column is-12">
          <h1 className="title home-title has-text-centered">Mystery Game</h1>
        </div>
        <section className="column is-6 is-offset-3">
          <article className="home-text content has-text-centered">
            <p>Home page text</p>
            <Button outline>hello</Button>
          </article>
        </section>
      </main>
    )
  }
}
export default Home
