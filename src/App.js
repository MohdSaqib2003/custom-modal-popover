import React, { useState } from "react";
import Popover from "./Component/Popover";

const App = () => {
  // state variable(flag) to show/hide modal
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1>Custom Modal/Popover</h1>

      <Popover visible={visible} setVisible={setVisible}>
        {/* Content of the modal */}
        <div>
          <br />
          <div>This is body</div>
          <br />
          <div>Click on close button to close the modal</div>
        </div>
      </Popover>

      {/* Button to show the modal */}
      <button onClick={() => setVisible(true)}>Show</button>
    </div>
  );
};

export default App;
