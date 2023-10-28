
import { useSelector, useDispatch } from 'react-redux';

import {
  decrement,
  increment,
  reset,
  incrementByAmount
} from './counterSlice';
import { useState } from 'react';


export function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }

  return (
    <div>

      <section>
        <p>{count}</p>
        <div>
          <button
            onClick={() => dispatch(increment())}
            type="button">+</button>
          <button
            onClick={() => dispatch(decrement())}
            type="button">-</button>
        </div>
        <input
          type='text'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div>
          <button
            onClick={() => dispatch(incrementByAmount(addValue))}
          >
            Add Amount
          </button>
          <button
            onClick={resetAll}
          >
            Reset All
          </button>
        </div>
      </section>
    </div>
  );
}
