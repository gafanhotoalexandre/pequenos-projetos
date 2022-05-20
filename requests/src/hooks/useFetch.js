import { useState, useEffect } from 'react';

// custom hook
export function useFetch(url) {
  const [data, setData] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // GET
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const json = await res.json();

      setData(json);
    }
    fetchData();
  }, [url, callFetch]);

  // POST
  function httpConfig(data, method) {
    if (method === 'POST') {
      setConfig({
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      setMethod(method);
    }
  }

  useEffect(() => {
    async function request() {
      if (method === 'POST') {
        const fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);
        const json = await res.json();

        setCallFetch(json);
      }
    }
    request();
  }, [config, method, url]);

  return { data, httpConfig };
}
