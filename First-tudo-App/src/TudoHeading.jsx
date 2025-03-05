function heading() {
  return (
    <div className="container text-center">
      <h4>Tudo App</h4>
      <div className="row align-items-start rowz">
        <div className="col">
          <input
            type="text"
            name=""
            className="textclass"
            placeholder="Enter Tudo Text"
          />
        </div>
        <div className="col">
          <input type="date" name="" id="" className="data" />
        </div>
        <div className="col">
          <button type="button" className="btn btn-success btnclass">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default heading;
