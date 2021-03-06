import React, { PureComponent } from 'react';
import Header from '../../components/memorygameURL/header/header';
import Card from '../../components/memorygameURL/card/tile';
import GameOver from '../../components/memorygameURL/card/gameover';
import '../../components/shared/Navigation/style.css';
import Sidebar from "../../components/shared/Navigation"


class MemoryGamePage extends PureComponent {

  state = {
    isFlipped: Array(16).fill(false),
    shuffledCard: MemoryGamePage.duplicateCard().sort(() => Math.random() - 0.5),
    clickCount: 1,
    prevSelectedCard: -1,
    prevCardId: -1,

  };

  static duplicateCard = () => {
    return [<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="" height="300px" width="300px"></img>,
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="" height="300px" width="300px"></img>,
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="" height="300px" width="300px"></img>,
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" alt="" height="300px" width="300px"></img>,
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" height="300px" width="300px"></img>,
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/AngularJS_logo.svg" alt="" height="300px" width="300px"></img>,
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" height="300px" width="300px"></img>,
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="" height="300px" width="300px"></img>,
    ].reduce((preValue, current, index, array) => {
      return preValue.concat([current, current])
    }, []);
  };

  handleClick = event => {
    event.preventDefault();
    const cardId = event.target.id;
    const newFlipps = this.state.isFlipped.slice();
    this.setState({
      prevSelectedCard: this.state.shuffledCard[cardId],
      prevCardId: cardId
    });

    if (newFlipps[cardId] === false) {
      newFlipps[cardId] = !newFlipps[cardId];
      this.setState(prevState => ({
        isFlipped: newFlipps,
        clickCount: this.state.clickCount + 1
      }));

      if (this.state.clickCount === 2) {
        this.setState({ clickCount: 1 });
        const prevCardId = this.state.prevCardId;
        const newCard = this.state.shuffledCard[cardId];
        const previousCard = this.state.prevSelectedCard;

        this.isCardMatch(previousCard, newCard, prevCardId, cardId);
      }
    }
  };

  isCardMatch = (card1, card2, card1Id, card2Id) => {
    if (card1 === card2) {
      const hideCard = this.state.shuffledCard.slice();
      hideCard[card1Id] = -1;
      hideCard[card2Id] = -1;
      setTimeout(() => {
        this.setState(prevState => ({
          shuffledCard: hideCard
        }))
      }, 1000);
    } else {
      const flipBack = this.state.isFlipped.slice();
      flipBack[card1Id] = false;
      flipBack[card2Id] = false;
      setTimeout(() => {
        this.setState(prevState => ({ isFlipped: flipBack }));
      }, 1000);
    }
  };

  restartGame = () => {
    this.setState({
      isFlipped: Array(16).fill(false),
      shuffledCard: MemoryGamePage.duplicateCard().sort(() => Math.random() - 0.5),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1
    });
  };

  isGameOver = () => {
    return this.state.isFlipped.every((element, index, array) => element !== false);
  };

  render() {
    return (
      <>
        <Sidebar>
          <Header restartGame={this.restartGame} />

        </Sidebar>
        <div id="motherdiv">
          {this.isGameOver() ? <GameOver restartGame={this.restartGame} /> :
            <div className="grid-container">

              {

                this.state.shuffledCard.map((cardNumber, index) =>
                  <Card
                    key={index}
                    id={index}
                    cardNumber={cardNumber}
                    isFlipped={this.state.isFlipped[index]}
                    handleClick={this.handleClick}
                  />
                )
              }
            </div>
          }

        </div>
      </>

    );
  }
}



export default MemoryGamePage;