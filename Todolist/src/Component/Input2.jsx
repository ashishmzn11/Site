function Input2({itemsname,itemsdate}){
    return(
        <div className="container">
        <div className="row as-row">
          <div className="col-6 col-md-6 col-lg-6 as">{itemsname}</div>
          <div className="col-4 col-md-4 col-lg-4 as"> {itemsdate}</div>
          <div className="col-2 col-md-2 col-lg-2 as">
          <button type="button" className="btn btn-danger butt">Delete</button>
          </div>
        </div>
      </div>
    )
}
export default Input2;