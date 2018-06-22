import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

// Imports
import { Button } from "../src";

// Stories
storiesOf("Button", module).add("with text", () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
));
