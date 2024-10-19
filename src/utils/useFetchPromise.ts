import { useState, useEffect } from 'react';

type PromiseStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';

interface UseFetchPromiseResult<T> {
  status: PromiseStatus;
  data: T | null;
  error: Error | null;
}

function useFetchPromise<T>(promise: Promise<T>): UseFetchPromiseResult<T> {
  const [status, setStatus] = useState<PromiseStatus>('idle');
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setStatus('pending');
    setData(null);
    setError(null);

    promise
      .then((result) => {
        setStatus('fulfilled');
        setData(result);
      })
      .catch((error) => {
        setStatus('rejected');
        setError(error);
      });
  }, [promise]);

  return { status, data, error };
}

export default useFetchPromise;