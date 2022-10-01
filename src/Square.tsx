interface SqureProps {
    value : string | undefined,
    color : string,
  }
  
export default function Square(props : SqureProps) : JSX.Element{
    return (
        <button className="square" 
        style={{
            backgroundColor: props.color,
          }}
        >
            {props.value}
        </button>
    );
  }
  