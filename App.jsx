import React from "react";
import ReactDOM from "react-dom";
import { Colored } from "./colored";
import Sync from "react-syncing";

class App extends Sync {
  constructor() {
    super();
    this.array = [...Array(1).keys()];
  }
  didMount() {
    setInterval(() => {
      this.set({
        color: this.state.color == "green" ? "purple" : "green",
        array: this.state.array
          ? [
              ...this.state.array,
              this.state.array.length,
              this.state.array.length + 1,
              this.state.array.length + 2,
              this.state.array.length + 3,
              this.state.array.length + 4
            ]
          : []
      });
    }, 500);
  }
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Colored color={this.state.color}>
          {this.state.array ? this.state.array.length : 0}
        </Colored>
        {this.state.array &&
          this.state.array.map((v, i) => <Colored key={i} />)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
