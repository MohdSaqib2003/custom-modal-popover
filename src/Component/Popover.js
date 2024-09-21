import React from "react";
import "./index.css";

const Popover = (props) => {
  const { visible, setVisible, children } = props;
  return visible ? (
    <div className="popover-container">
      <div className="inner-popover">
        <div className="header">
          <div>
            <b> Modal </b>
          </div> <hr />
          <div>
            <button
              onClick={(e) => {
                // Close the modal on click on close btn
                setVisible(false);
              }}
            >
              close x
            </button>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  ) : null;
};

export default Popover;
