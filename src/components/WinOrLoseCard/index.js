import './index.css'

const WinOrLoseCard = props => {
  console.log(props)
  const {score, playAgain} = props
  const winStatusText = score >= 12 ? 'You Won' : 'You Lose'
  const scoreText = score >= 12 ? 'Best Score' : 'Score'
  const url =
    score >= 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="win-lose-container">
      <div className="score-details">
        <h1>{winStatusText}</h1>
        <p>{scoreText}</p>
        <p className="socre">{score}/12</p>
        <button type="button" onClick={() => playAgain()}>
          Play Again
        </button>
      </div>
      <img src={url} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
