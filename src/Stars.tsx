import { Component, createSignal, JSX } from 'solid-js';

import Star from './components/Star';

interface StarsProps {
  onClick?: (selectedValue: number) => void;
  style?: JSX.CSSProperties;
  initialValue?: number;
  disabled?: boolean;
  maxRating?: number;
}

const Stars: Component<StarsProps> = ({ onClick, style, initialValue, disabled, maxRating }) => {
  const max = maxRating ? maxRating : 5;
  const starsArray = Array.from(Array(max).keys());

  const isDisabled = disabled ? disabled : false;

  const value = initialValue && initialValue <= 5 ? initialValue : 0;
  const [rating, setRating] = createSignal<number>(value);
  const [pointerRating, setPointerRating] = createSignal<number>(value);

  const filledStar = '★';
  const emptyStar = '☆';

  // Utility function: flawed with numbers and percentages...
  const checkSizeValue = (style: JSX.CSSProperties, defaultValue: string = '30px'): string | number => {
    let maxValue = style.width ? style.width : defaultValue;
    if (style.height && parseInt(style.height) > parseInt(maxValue)) {
      maxValue = style.height;
    }
    if (style['font-size']) {
      if (typeof style['font-size'] === 'string' && parseInt(style['font-size']) > parseInt(maxValue)) {
        maxValue = style['font-size'];
      } else if (style['font-size'] > parseInt(maxValue)) {
        maxValue = style['font-size'] + 'px';
      }
    }
    return maxValue;
  };

  const sizeValue = checkSizeValue(style);

  const resetRating = () => {
    setRating(0);
    setPointerRating(0);
  };

  const handleOnClick = (selected: number) => {
    if (isDisabled) {
      return;
    }

    if (selected === rating()) {
      resetRating();
      return;
    }
    setRating(selected);
    setPointerRating(selected);
    if (onClick) {
      onClick(rating());
    }
  };

  const handleOnPointerEnter = (index: number) => {
    if (isDisabled) {
      return;
    }
    setPointerRating(index + 1);
  };

  const handleOnPointerLeave = () => {
    if (isDisabled) {
      return;
    }
    setPointerRating(rating());
  };

  return (
    <div>
      {starsArray.map((number) => (
        <Star
          index={number}
          style={style}
          emptyChar={emptyStar}
          filledChar={filledStar}
          pointerRating={pointerRating}
          rating={rating}
          clickHandler={handleOnClick}
          pointerLeaveHandler={handleOnPointerLeave}
          pointerEnterHandler={handleOnPointerEnter}
          size={sizeValue}
        />
      ))}
    </div>
  );
};

export default Stars;
