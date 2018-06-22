import React, { Component } from "react";
import { render } from "react-dom";

import { Button } from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <Button>Button</Button>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
