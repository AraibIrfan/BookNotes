import React from "react";
import Button from "react-bootstrap/Button";

function SortingBtn(props) {
  return (
    <>
      
      <Button
        variant="success"
        className="text-white"
        style={{ width: "6rem" }}
      >
        {props.sortTitle}
      </Button>
    </>
  );
}

export default SortingBtn;
