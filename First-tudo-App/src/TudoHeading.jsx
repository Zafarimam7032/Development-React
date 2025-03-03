function heading() {
  return (
    <div class="container text-center">
      <h4>Tudo App</h4>
      <div class="row align-items-start rowz">
        <div class="col">
          <input
            type="text"
            name=""
            class="textclass"
            placeholder="Enter Tudo Text"
          />
        </div>
        <div class="col">
          <input type="date" name="" id="" class="data" />
        </div>
        <div class="col">
          <button type="button" class="btn btn-success btnclass">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default heading;
