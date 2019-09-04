import "./notecard.css";
import React, { Component } from 'react';
import Card from './card'
import DrawButton from "./nextbutton";

export default class NoteCards extends Component {
    
    constructor() {
        super();
        this.state = {
            cards: [
                {
                    question: '404',
                    choice1: 'Not found',
                }
            ],
            currentCard: {}
        }
    
        this.updateCard = this.updateCard.bind(this);
    }

    //this is called a lifecycle hook
    componentDidMount() {
        console.log(this.props.questionArray);

        const currentCards = this.state.cards;

      
           
                this.props.questionArray.forEach(function (item) {
                    
                    currentCards.push({
                        question: item.question,
                        choice1: item.choice1
                    });
                });
           


        this.setState({
            cards: currentCards,
            currentCard: this.getRandomCard(currentCards)
        });
    }

    getRandomCard(currentCards) {
        let card = currentCards[Math.floor(Math.random() * currentCards.length)];
        return card;
    }

    updateCard() {
        const currentCards = this.state.cards;
        this.setState({
            currentCard: this.getRandomCard(currentCards)
        })
    }

    render() {
        return (
            <div className='Flashcard'>
                <div className='card-row'>
                    <Card question={this.state.currentCard.question}
                        answer={this.state.currentCard.choice1}
                    //   description={this.state.currentCard.description} 
                    />
                </div>
                <div className='button-row'>
                    <DrawButton drawCard={this.updateCard} />
                </div>
            </div>
        );
    }
}