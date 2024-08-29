import Input2 from "./Input2.jsx";
const Inputs=({items})=>{
    return<>
     <div className="as-left">
       {
        items.map(item=>  <Input2 itemsdate={item.name} itemsname={item.Date} ></Input2>)
       }
       
     </div>
    </>
}
export default Inputs;