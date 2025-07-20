function Display() {
  const content = `
/*
 * Java Program Example: HelloWorld.java
 * This program prints "Hello, World!" to the console.
 */

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

/*
 * Instructions to Write and Run this Java Program:
 * 1. Open your favorite text editor or IDE.
 * 2. Copy the code above and save it as HelloWorld.java.
 * 3. Open your terminal or command prompt.
 * 4. Navigate to the directory containing HelloWorld.java.
 * 5. Compile the program by running:
 *      javac HelloWorld.java
 * 6. Run the compiled program with:
 *      java HelloWorld
 * 7. You should see the output:
 *      Hello, World!
 */
`;

  return (
    <div className="h-full overflow-y-auto p-4 bg-gray-900 text-gray-100">
      <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto whitespace-pre-wrap">
        <code>{content}</code>
      </pre>
    </div>
  );
}

export default Display;
