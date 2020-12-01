import { useState, useEffect } from "react";
import API_KEY from "./keys";

//here we are using HOOKS, every file that starts with "use" is a HOOK, this is a custom hook

const CONTEXT_KEY = "fce4cb7d102e568b2"; //this is search engine

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  //getting the search result terms and displaying it on page
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
