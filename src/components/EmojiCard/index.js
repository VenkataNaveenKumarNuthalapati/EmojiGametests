import './index.css'

const EmojiCard = props => {
  const {eachEmoji, addScore} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  return (
    <li className="card-container">
      <button type="button" onClick={() => addScore(id)}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
