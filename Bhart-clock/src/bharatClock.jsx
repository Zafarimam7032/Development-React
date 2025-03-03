function bharatClock() {
  let date = new Date();
  return (
    <div>
      <h1>Bharat Clock</h1>
      <h4>bharat clock will show the time</h4>
      <h4>
        Current time : {date.getHours()}: {date.getMinutes()}:
        {date.getSeconds()}
      </h4>
    </div>
  );
}

export default bharatClock;
