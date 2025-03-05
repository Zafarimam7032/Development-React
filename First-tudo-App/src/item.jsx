function items({ item }) {
  return (
    <>
      {item.map((i) => (
        <div className="container text-center">
          <div className="row align-items-start rowz">
            <div className="col">
              <h4>{i[0]}</h4>
            </div>
            <div className="col">
              <h4>{i[1]}</h4>
            </div>
            <div className="col">
              <button type="button" className="btn btn-danger btnclass">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
}

export default items;
