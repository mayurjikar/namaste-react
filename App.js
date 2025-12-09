//nested creat element using React

{/* <div id="parent">
  <div id="child">
    <h1>Hello, World! React. I am h1 tag</h1>
    <h2>Hello, World! React. I am h2 tag</h2>
  </div>
</div> */}
const parent = React.createElement('div', {id: 'parent'}, React.createElement('div',{id: 'child'}, [React.createElement('h1', {}, 'Hello, World! React. I am h1 tag'), React.createElement('h2', {}, 'Hello, World! React. I am h2 tag')]));
//const headind = React.createElement('h1', {id: "heading"}, 'Hello, World! React');
console.log(parent);
const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);