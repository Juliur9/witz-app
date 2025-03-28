import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const fetchNewJoke = async () => {
    try {
      const response = await axios.get(
        "https://v2.jokeapi.dev/joke/Any?lang=de&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
      );
      setData(response.data);
    } catch (error) {
      console.error("Fehler beim Abrufen des Witzes:", error);
    }
  };

  useEffect(() => {
    fetchNewJoke();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-400 to-indigo-600">
      <h1 className="mb-8 text-5xl font-bold text-white drop-shadow-lg">
        Die besten Witze 😂
      </h1>
      <div className="w-full max-w-2xl p-6 bg-white shadow-xl rounded-3xl hover:shadow-2xl">
        <>
          <div className="p-4 text-lg font-semibold text-gray-800 bg-gray-100 rounded-lg shadow-md">
            {data?.setup}
          </div>
          <div className="p-4 mt-4 text-lg font-semibold text-right text-gray-800 bg-green-200 rounded-lg shadow-md">
            {data?.delivery}
          </div>
        </>
      </div>

      <button
        onClick={fetchNewJoke}
        className="px-6 py-3 mt-8 text-lg font-bold text-black transition-all duration-200 bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-500 active:scale-95"
      >
        Neuer Witz 🤣
      </button>
    </div>
  );
}

export default App;
