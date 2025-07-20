function Heading() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-2xl font-bold mb-2 md:mb-0">
          This is AI Developed By
          <span className="text-yellow-300 "> Zafar</span>
        </h2>

        <nav className="flex space-x-4">
          <a
            href="https://github.com/Zafarimam7032"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-white text-indigo-700 hover:bg-indigo-100 transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/zafar-imam-1a65a31b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-white text-indigo-700 hover:bg-indigo-100 transition duration-300"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Heading;
