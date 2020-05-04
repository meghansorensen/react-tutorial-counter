import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <ul className="list-group">
          {counters.map((counter) => (
            <li key={counter.id} className="list-group-item">
              <Counter
                key={counter.id}
                onDelete={onDelete}
                onIncrement={onIncrement}
                counter={counter}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counters;
