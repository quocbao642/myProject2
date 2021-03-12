import React from "react";

const Person = (props) => {
  return (
    <form>
      <input type="number" id="nhi" />
      <input type="button" value="Search" onClick={props.changed} />
    </form>
  );
};
export default Person;
