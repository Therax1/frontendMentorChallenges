function Game () {
    return(
        <section className="game">
           <button className="game__choicebtn" data-choice="paper">
                <div className="choice paper">
                    <img src="/images/icon-paper.svg" alt="Paper Icon" />
                </div>
           </button>
           <button className="game__choicebtn" data-choice="scissors">
                <div className="choice scissors">
                    <img src="/images/icon-scissors.svg" alt="Scissors Icon" />
                </div>
           </button>
           <button className="game__choicebtn" data-choice="rock">
                <div className="choice rock">
                    <img src="/images/icon-rock.svg" alt="Rock Icon" />
                </div>
           </button>
        </section>
    );
}

export default Game;