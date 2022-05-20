import { useState, useEffect } from 'react';

// custom hook
export function useFetch(url) {
  const [data, setData] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // Loading
  const [isSendingProduct, setIsSendingProduct] = useState(false);

  // handling errors
  const [error, setError] = useState(null);

  // deleting data
  const [itemId, setItemId] = useState(null);

  // GET
  useEffect(() => {
    async function fetchData() {
      setIsSendingProduct(true);
      setError('');

      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      } catch (err) {
        setError('Houve algum erro ao carregar os dados');
      }

      setIsSendingProduct(false);
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
    } else if (method === 'DELETE') {
      setConfig({
        method,
        headers: {
          'Content-Type': 'application/json'
        },
      });

      setMethod(method);
      setItemId(data);
    }
  }

  useEffect(() => {
    async function request() {
      if (method === 'POST') {
        setIsSendingProduct(true);

        const fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);
        const json = await res.json();

        setCallFetch(json);
        setIsSendingProduct(false);
      } else if (method === 'DELETE') {
        const deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl, config);
        const json = await res.json();

        setCallFetch(json);
      }
    }
    request();
  }, [config, method, url]);

  return { data, httpConfig, isSendingProduct, error };
}
