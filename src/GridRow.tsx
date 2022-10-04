import Square from "./Square"
type GridRowProps = {
    rowIdx: number
    currGuess : string[],
    solution : string,
}

export default function GridRow(props: GridRowProps): JSX.Element {
    const currRow : JSX.Element[] = Array(5);
    for (let j = 0; j < 5; j++){
        const currIdx = (props.rowIdx * 5) + j;
        currRow[j] = <Square squareIdx={currIdx} currChar={props.currGuess[j]} solution={props.solution}/>
    }
    return <div className = 'row'>{currRow}</div>;
}

