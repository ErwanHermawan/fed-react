import { useState, useEffect } from 'react';

const UseFetch = (url) => {
  // react hooks
  const [data, setdata] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // JS call API
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Data tidak dapat dimuat');
        }
        return res.json();
      })
      .then((data) => {
        setdata(data);
        setIsPending(false);
        setError('');
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return [data, isPending, error];
};

export default UseFetch;
