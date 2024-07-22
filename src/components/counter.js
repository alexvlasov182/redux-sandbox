import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, random } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="container jubmotron">
      <h2>{counter}</h2>
      <button
        onClick={() => dispatch(decrement())}
        id="dec"
        className="btn btn-primary btn-lg"
      >
        DEC
      </button>
      <button
        onClick={() => dispatch(increment())}
        id="inc"
        className="btn btn-primary btn-lg"
      >
        INC
      </button>
      <button
        onClick={() => dispatch(random())}
        id="rnd"
        className="btn btn-primary btn-lg"
      >
        RND
      </button>
    </div>
  );
};

export default Counter;
