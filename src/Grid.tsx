import React from 'react';
import { getGridRow } from './GridRow';

interface GridProps {
  solution : String;
}

interface GridState {
  word : string,
  squares : string [],
  nextInd : number 
}

export default class Grid extends React.Component<GridProps, GridState> {

  constructor(props : GridProps) {
    super(props);
    this.state = { 
      word : props.solution.toLowerCase(),
      squares : Array(25).fill(''),
      nextInd : 0,
    } as GridState;
    document.addEventListener('keydown', e => this.updateState(e.key), false);   
  }

  isLetter(str : string) : boolean {
    return str.length === 1 && str.toLowerCase() !== str.toUpperCase();
  }

  updateState(key : string) : void {
    
    const nextInd : number = this.state.nextInd;
    const squares : string[] =  this.state.squares.slice();

    if (this.isLetter(key) && nextInd < 25) {
      squares[nextInd] = key;
      
      this.setState({
        squares : squares,
        nextInd : nextInd + 1,
      });
    } 
  }

  render() : JSX.Element {
    const divChildren : JSX.Element[] = Array(5);
    for (let i = 0; i < 5; i++) {
      divChildren[i] = getGridRow(i * 5, this.state.squares.slice(i * 5, (i+1) * 5), this.state.word);
    }
    return React.createElement('div',  {className : "grid"}, divChildren);
  }

}