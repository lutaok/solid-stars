import { Accessor, Component, JSX, Setter, Signal } from 'solid-js';

interface StarProps {
  emptyChar: string;
  filledChar: string;
  style: JSX.CSSProperties;
  size: string | number;
  rating: Accessor<number>;
  pointerRating: Accessor<number>;
  clickHandler: (value: number) => void;
  pointerEnterHandler: (value: number) => void;
  pointerLeaveHandler: () => void;
  index: number;
}

const Star: Component<StarProps> = (props) => {
  const dimensions = { width: props.size, height: props.size, 'font-size': props.size };
  const defaultStyle = { background: 'none', border: 'none', padding: 0, margin: 0 };

  return (
    <>
      <button
        onClick={() => props.clickHandler(props.index + 1)}
        style={props.style ? { ...defaultStyle, ...props.style, ...dimensions } : { ...defaultStyle, ...dimensions }}
        onPointerEnter={() => props.pointerEnterHandler(props.index)}
        onPointerLeave={() => props.pointerLeaveHandler()}
      >
        {props.rating() > props.index || props.pointerRating() > props.index ? props.filledChar : props.emptyChar}
      </button>
    </>
  );
};

export default Star;
