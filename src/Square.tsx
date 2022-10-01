interface SqureProps {
    key : number,
    value : string | undefined,
    color : string,
  }
  
export default function Square(props : SqureProps) : JSX.Element{
    return (
        <div className="square" key={props.key}
        style={{
            backgroundColor: props.color,
          }}
        >
            {props.value}
        </div>
    );
  }
  