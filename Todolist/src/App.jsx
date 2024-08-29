import Apphad from "./Component/Apphad.jsx";
import Apptext1 from "./Component/Apptext1.jsx";
import Input2 from "./Component/Input2.jsx";
import Input3 from "./Component/Input3.jsx";
import "./Apps.css";
function App() {
  return (
    <div>
      <center>
        <Apphad />
        
        <div className="as-left">
        <Apptext1 />
          <Input2 />
          <Input3 />
        </div>
      </center>
    </div>
  );
}
export default App;
