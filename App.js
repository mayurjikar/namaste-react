import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="title">Hello from Title Component</h1>;
const FooterComponent = () => {
  return <h2>Footer Component</h2>;
};

// Functional Component in React
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 id="heading">Hello Namaste React Functional Component</h1>
      <FooterComponent />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
