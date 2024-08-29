import Apphad from "./Component/Apphad.jsx";
import Apptext1 from "./Component/Apptext1.jsx";
import Inputs from "./Component/Inputs.jsx";

import "./Apps.css";
function App() {
const items=[{
  name:"buy milk",
  Date:" 04/10/2023"
},
{
  name:"buy milk",
  Date:" 04/10/2023"
},
{
  name:"buy milk",
  Date:" 04/10/2023"
},
{
  name:"buy milk",
  Date:" 04/10/2023"
},
]
  return (
    <div>
      <center>
        <Apphad />
        <div className="as-left"><Apptext1 /></div>
       <Inputs items={items}/>
      </center>
    </div>
  );
}
export default App;
