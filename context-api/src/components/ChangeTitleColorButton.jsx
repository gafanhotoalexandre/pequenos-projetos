import { useTitleColorContext } from "../hooks/useTitleColorContext";

export function ChangeTitleColorButton() {
  const { color , dispatch } = useTitleColorContext();

  function handleTitleColor(color) {
    dispatch({ type: color });
  }

  return (
    <div>
      <button onClick={() => handleTitleColor('RED')}>Red</button>
      <button onClick={() => handleTitleColor('AQUA')}>Aqua</button>
      <button onClick={() => handleTitleColor('RESET')}>Reset</button>
    </div>
  );
}
