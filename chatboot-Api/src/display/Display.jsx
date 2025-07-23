import { useContext } from "react";
import UserContext from "../context/Context";

function Display() {
  const { message } = useContext(UserContext);
  console.log("response: " + message?.message);

  return (
    <div className="h-full overflow-y-auto p-4 text-gray-100">
      <pre className="text-blue-950 p-4 rounded overflow-x-auto whitespace-pre-wrap">
        <code className="text-base text-gray-800 font-mono font-medium">
          {message?.message}
        </code>
      </pre>
    </div>
  );
}

export default Display;
