const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, "Luna"),
    React.createElement("h3", {}, "Dog"),
    React.createElement("h3", {}, "Havanese"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    ...[1, 2, 3, 4].map(i => React.createElement("h1", {} , i)),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
