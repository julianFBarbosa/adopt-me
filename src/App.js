import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="my-brand">Adopt me</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Bean" animal="Dog" breed="Wheaten Terrier" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
