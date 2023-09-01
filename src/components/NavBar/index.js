import './index.css'

const NavBar = props => {
  const {score, topscore, gamesubmit} = props

  return (
    <nav>
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {!gamesubmit ? (
        <div className="score-container">
          <p>Score: {score}</p>
          <p>Top Score: {topscore}</p>
        </div>
      ) : (
        <div> </div>
      )}
    </nav>
  )
}

export default NavBar
