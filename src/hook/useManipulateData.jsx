import { useState } from "react";

export default function useManipulateData(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [dataCharacter, setDataCharacter] = useState([]);

  const getDataFromParams = async () => {
    setIsLoading(true);
    setIsError("");

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Character Not Found");
      }

      const data = await res.json();

      setDataCharacter(data?.results?.slice(0, 8));
    } catch (e) {
      setIsError(e.message);
    }

    setIsLoading(false);
  };

  return { dataCharacter, setDataCharacter, getDataFromParams, setIsError, isError, isLoading };
}
