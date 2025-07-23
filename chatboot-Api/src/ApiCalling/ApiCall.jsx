const ApiCall = async function ({ message = "hi" }) {
  try {
    console.time("api-call");

    const res = await fetch(
      `http://localhost:1010/ai/${encodeURIComponent(message)}`
    );

    console.timeEnd("api-call");

    if (res.ok) {
      const response = await res.json();
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export default ApiCall;
