import { useState, useEffect } from "react";
import API_KEY from "./keys";

//TELLS GOOGLE WHICH SEARCH ENGINE TO USE
const CONTEXT_KEY = "b3025c4511ed27f7f";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        //convert response into json
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return {data};
};

export default useGoogleSearch;
