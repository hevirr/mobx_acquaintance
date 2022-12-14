import React from 'react';
import counter from './store/counter'
import {observer} from "mobx-react-lite";

const Counter = observer(() => {
  return (
    <div className="counter">
      {`Counter = ${counter.count}`}
      <div className="btns">
        <div className="btn" onClick={() => counter.increment()}>+</div>
        <div className="btn" onClick={() => counter.decrement()}>-</div>
      </div>
    </div>
  );
});

export default Counter;