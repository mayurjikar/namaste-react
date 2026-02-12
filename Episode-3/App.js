import React from "react";
import ReactDOM from "react-dom/client";

// Nested create element using React
let createElem = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Namaste React",
  React.createElement("h2", {}, "I am h2 tag inside h1 tag"),
  React.createElement("h3", {}, "I am h3 tag inside h1 tag"),
);

// JSX element using React
const JSXHeading = () => {
  return (
    <div>
      <h1>JSX Heading</h1> <h2>JSX Sub Heading</h2><h3>JSX Sub Sub Heading</h3>
    </div>
  );
};

// Functional Component in React
const JSXFunctionalComponent = () => {
    return (
        <div>
          <h1>JSX Functional Component1</h1> <h2>JSX Sub Heading</h2><h3>JSX Sub Sub Heading</h3>
        </div>
    )
}

const TitleFunctionComponent = () => {
    return (
        <div>
            <h1>Title Functional Component</h1>
            <JSXFunctionalComponent/>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TitleFunctionComponent />);
