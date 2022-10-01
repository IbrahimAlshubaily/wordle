import React from 'react';
import Square from "./Square"
import "./css/Grid.css"

interface GridState {
  correctWord : string,
  squares : (string | undefined) [],
  nextInd : number 
}

export default class Grid extends React.Component<{}, GridState> {

  constructor(props : {}) {
    super(props);
    this.state = { 
      correctWord : "hoyah",
      squares : Array(9).fill(undefined),
      nextInd : 0,
    } as GridState;

    document.addEventListener('keydown', e => this.updateState(e.key), false);   
  }

  isLetter(str : string) : boolean {
    return str.length === 1 && str.toLowerCase() != str.toUpperCase();
  }

  updateState(key : string) : void {
    let nextInd : number = this.state.nextInd;
    const squares : (string | undefined) [] =  this.state.squares.slice();

    if (this.isLetter(key) && nextInd < 25) {
        squares[nextInd++] = key;
    } else if (key === "Backspace" && nextInd > 0) {
      squares[--nextInd] = undefined;
    }

    this.setState({
      squares : squares,
      nextInd : nextInd,
    });

  }

  renderSquare(squareIdx : number) : JSX.Element {

    const currChar = this.state.squares[squareIdx];
    const correctWord = this.state.correctWord;

    let color = "";
    if (currChar) {

      if (currChar === correctWord[squareIdx%5]) {
          color = 'green';
      } else if (correctWord.includes(currChar)) {
          color = "blue";
      } else {
          color = "gray";
      }

    } 
    return React.createElement(Square, { value: currChar, color: color});
}
  
  getGridRow(rowStartIdx : number) : JSX.Element {
    const squares : JSX.Element[] = Array(5);
    for (let i = 0; i < 5; i++) {
      squares[i] = this.renderSquare(rowStartIdx + i);
    }
    return React.createElement('div',  {className: "board-row"}, squares);
  }

  render() : JSX.Element {
    const divChildren : JSX.Element[] = Array(5);
    for (let i = 0; i < 5; i++) {
      divChildren[i] = this.getGridRow(i * 5);
    }
    return React.createElement('div',  {className : "grid"}, divChildren);
  }
}