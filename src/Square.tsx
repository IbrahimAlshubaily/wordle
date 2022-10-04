type SquareProps = {
    squareIdx : number,
    currChar: string,
    solution : string
}

export default function Square(props: SquareProps) : JSX.Element {

    const {squareIdx, currChar, solution} = props;
    let color = "";
    if (currChar) {
        color = "gray";
        if (currChar === solution[squareIdx%5]) {
        color = 'green';
        } else if (solution.includes(currChar)) {
        color = "blue";
        }
    }
    return <div className="square" key={squareIdx} style={{backgroundColor: color}}> {currChar}</div>;
}