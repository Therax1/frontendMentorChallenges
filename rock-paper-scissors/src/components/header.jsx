
function Header(){
    return (
        <header className="header">
            <div className="">
                <h2 className="title">
                    ROCK <br />PAPER <br />SCISSORS
                </h2>
            </div>
            <div className="score-container">
                <div className="score">
                    <h5 className="score-label">SCORE</h5>
                    <h2 className="current-score">12</h2>
                </div>
            </div>
        </header>
    );
}

export default Header;