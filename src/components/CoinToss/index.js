// Write your code here
import {Component} from 'react'
import './index.css'

const Head = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const Tail = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

const headAndTail = [Head, Tail]

class CoinToss extends Component {
  state = {coinTossed: 0, Heads: 0, Tails: 0}

  CoinClicked = () => {
    const random = Math.floor(Math.random() * headAndTail.length)

    this.setState(preSta => {
      const val =
        random === 0 ? {Heads: preSta.Heads + 1} : {Tails: preSta.Tails + 1}

      return {...val, coinTossed: random}
    })
  }

  render() {
    const {coinTossed, Heads, Tails} = this.state
    const TOTAL = Heads + Tails

    return (
      <p className="mainContainer">
        <p className="coinCard">
          <h1 className="tossHead">Coin Toss Game</h1>
          <p className="Head-Tail">Heads (or) Tails</p>
          <img
            src={headAndTail[coinTossed]}
            alt="toss result"
            className="coin-image"
          />
          <button
            type="button"
            className="tossButton"
            onClick={this.CoinClicked}
          >
            Toss Coin
          </button>
          <div className="count">
            <p>Total:{TOTAL}</p>
            <p>Heads:{Heads}</p>
            <p>tails:{Tails}</p>
          </div>
        </p>
      </p>
    )
  }
}

export default CoinToss
