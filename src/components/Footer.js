import React from 'react'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Made by GMWilkinson
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
