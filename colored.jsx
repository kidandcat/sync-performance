import React from "react";
import Sync from "react-syncing";

export class Colored extends Sync {
  render() {
    return (
      <div
        style={{
          width: 30,
          height: 30,
          margin: 5,
          textAlign: "center",
          borderRadius: 8,
          backgroundColor: this.props.color
            ? this.props.color
            : this.state.color || "gray"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
