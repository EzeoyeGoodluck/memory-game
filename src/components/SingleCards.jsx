import './singleCards.css';

const SingleCards = ({ card, handleChoice, flipped, disabled }) => {
     const  handleClick = ()=>{
        if(!disabled){
        handleChoice(card)
        }
    }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img alt="card" src={card.src} className="front" />
        <img 
        src="./img/cover.png"
         alt="card"
          className="back"
          onClick={handleClick} />
      </div>
    </div>
  );
};

export default SingleCards;
