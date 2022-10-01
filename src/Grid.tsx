import React from 'react';
import Square from "./Square"
import "./css/Grid.css"

interface GridState {
  word : string,
  squares : (string | undefined) [],
  nextInd : number 
}

interface GridProps {
  word : String;
}
export default class Grid extends React.Component<GridProps, GridState> {

  constructor(props : GridProps) {
    super(props);
    console.log("grid", props.word);
    this.state = { 
      word : props.word.toLowerCase(),
      squares : Array(25).fill(undefined),
      nextInd : 0,
    } as GridState;
    console.log("X");
    console.log(this.state.word);
    document.addEventListener('keydown', e => this.updateState(e.key), false);   
  }

  isLetter(str : string) : boolean {
    return str.length === 1 && str.toLowerCase() !== str.toUpperCase();
  }

  updateState(key : string) : void {
    
    const nextInd : number = this.state.nextInd;
    const squares : (string | undefined) [] =  this.state.squares.slice();

    if (this.isLetter(key) && nextInd < 25) {
      squares[nextInd] = key;
      
      this.setState({
        squares : squares,
        nextInd : nextInd + 1,
      });
    } 
  }

  renderSquare(squareIdx : number) : JSX.Element {

    const currChar = this.state.squares[squareIdx];
    const solution = this.state.word;
    console.log(solution);

    let color = "";
    if (currChar) {

      if (currChar === solution[squareIdx%5]) {
          color = 'green';
      } else if (solution.includes(currChar)) {
          color = "blue";
      } else {
          color = "gray";
      }

    } 
    return React.createElement(Square, {key: squareIdx, value: currChar, color: color});
}
  
  getGridRow(rowStartIdx : number) : JSX.Element {
    const squares : JSX.Element[] = Array(5);
    for (let i = 0; i < 5; i++) {
      squares[i] = this.renderSquare(rowStartIdx + i);
    }
    return React.createElement('div',  {className: "board-row", key: rowStartIdx}, squares);
  }

  render() : JSX.Element {
    const divChildren : JSX.Element[] = Array(5);
    for (let i = 0; i < 5; i++) {
      divChildren[i] = this.getGridRow(i * 5);
    }
    return React.createElement('div',  {className : "grid"}, divChildren);
  }


}