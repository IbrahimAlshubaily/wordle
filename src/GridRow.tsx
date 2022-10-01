import React from 'react';

export function getGridRow(rowStartIdx : number, guess: string[], solution : string) : JSX.Element {
    const squares : JSX.Element[] = Array(5);
    for (let i = 0; i < 5; i++) {
      squares[i] = renderSquare(rowStartIdx + i, guess[i], solution);
    }
    return React.createElement('div',  {className: "board-row", key: rowStartIdx}, squares);
}

function renderSquare(squareIdx : number, currChar: string, solution : string) : JSX.Element {
    let color = "";
    if (currChar) {
        color = "gray";
      if (currChar === solution[squareIdx%5]) {
          color = 'green';
        } else if (solution.includes(currChar)) {
            color = "blue";
        }
    }
    return <div className="square" key={squareIdx} style={{backgroundColor: color}}> {currChar}</div>
}
