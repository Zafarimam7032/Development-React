function Contect() {
  return (
    <>
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6 text-gray-800">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <div className="space-y-2">
          <p>
            <span className="font-medium">📍 Location:</span> Pune, India
          </p>
          <p>
            <span className="font-medium">📞 Phone:</span>{" "}
            <a
              href="tel:+919322184379"
              className="text-blue-600 hover:underline"
            >
              +91 9322184379
            </a>
          </p>
          <p>
            <span className="font-medium">📧 Email:</span>{" "}
            <a
              href="mailto:zafarimam755122@gmail.com"
              className="text-blue-600 hover:underline"
            >
              zafarimam755122@gmail.com
            </a>
          </p>
          <p>
            <span className="font-medium">🎂 Date of Birth:</span> 05 Feb 1998
          </p>
          <p>
            <span className="font-medium">🆔 PAN:</span> ACEPZ4644F
          </p>
        </div>
      </div>
    </>
  );
}

export default Contect;
