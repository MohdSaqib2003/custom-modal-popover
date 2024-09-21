import React from "react";
import "./index.css";

const Popover = (props) => {
  const { visible, setVisible, children } = props;
  return visible ? (
    <div
      className="popover-container"
      onClick={(e) => {
        // close the modal on outside click
        setVisible(false);
      }}
    >
      <div
        className="inner-popover"
        onClick={(e) => {
          // Restrict closing the modal by clicking on the modal itself
          setVisible(true);
          e.stopPropagation(); // It restricts the execution of the parent's event
        }}
      >
        <div className="header">
          <div>
            <b> Modal </b>
          </div>{" "}
          <hr />
          <div>
            <button
              onClick={(e) => {
                // Close the modal on click on close btn
                setVisible(false);
                e.stopPropagation(); //It restricts the execution of the parent's event
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
