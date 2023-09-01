import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super()
    this.props = props
  }

  state = {
    score: 0,
    topscore: 0,
    selectedEmojis: [],
    winstatus: true,
    gamesubmit: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  addScore = id => {
    const {score, selectedEmojis} = this.state
    if (selectedEmojis.includes(id)) {
      this.setState(preState => ({
        ...preState,
        winstatus: false,
        gamesubmit: true,
      }))
    } else {
      this.setState(preState => ({
        ...preState,
        selectedEmojis: [...selectedEmojis, id],
        score: score + 1,
        gamesubmit:
          score + 1 >= 12 ? !preState.gamesubmit : preState.gamesubmit,
      }))
    }
  }

  playAgain = () => {
    const {score, topscore} = this.state
    this.setState({
      score: 0,
      topscore: score > topscore ? score : topscore,
      selectedEmojis: [],
      winstatus: true,
      gamesubmit: false,
    })
  }

  render() {
    const shuffledEmojiList = this.shuffledEmojisList()
    const {score, topscore, winstatus, gamesubmit} = this.state
    console.log(score, 12)

    return (
      <div className="bg-container">
        <NavBar score={score} topscore={topscore} gamesubmit={gamesubmit} />
        {winstatus === true && score < 12 ? (
          <div className="cards-container">
            <ul className="ul-cards">
              {shuffledEmojiList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  eachEmoji={eachEmoji}
                  addScore={this.addScore}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="win-status-card">
            <WinOrLoseCard score={score} playAgain={this.playAgain} />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
