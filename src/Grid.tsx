import React, { useEffect, useState } from 'react';
import GridRow from "./GridRow"

interface GridProps {
  solution : string;
}

interface GridState {
  word : string,
  squares : string [],
  nextIdx : number 
}
export default class Grid extends React.Component<GridProps, GridState> {

  constructor(props: GridProps) {
    super(props);
    this.state = {
      word: props.solution.toLowerCase(),
      squares : Array(25).fill(''),
      nextIdx: 0,
    }as GridState;
  }

  componentDidMount(): void {
    window.addEventListener('keydown', e => this.handleKeyDown(e.key));
  }
  componentWillUnmount(): void {
    window.removeEventListener('keydown', e => this.handleKeyDown(e.key));
  }

  handleKeyDown(eventKey: string) {
    const isLetter = (str: string): boolean =>  str.length === 1 && str.toLowerCase() !== str.toUpperCase();
    const {squares, nextIdx} = this.state;
    if (isLetter(eventKey) && nextIdx < 25) {
      const updatedSquares = squares.slice();
      updatedSquares[nextIdx] = eventKey.toLowerCase();
      this.setState({...this.state, squares: updatedSquares, nextIdx: nextIdx+1});
    }
  }
  
  render() {
    const grid: JSX.Element[] = Array(5);
    for (let i = 0; i < 5; i++) {
      grid[i] = <GridRow rowIdx={i} currGuess={this.state.squares.slice(i*5, i*5 + 5)} solution={this.state.word} />
    }
    return <div className='grid'>{grid}</div>;
  }
}
