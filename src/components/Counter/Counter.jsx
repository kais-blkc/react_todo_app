import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../redux/counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>

      <button
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        +5
      </button>

      <br />
      <br />
      <p>Count: {count}</p>
    </div>
  );
}
