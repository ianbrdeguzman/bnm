import { useEffect, useState } from 'react';
import { Metric } from '../vite-env';

export function useFetch(search: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Metric[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://localhost:4000${search === '/' ? '/overview' : search}`
      );
      const data = await res.json();
      setData(data);
    }

    try {
      setLoading(true);
      fetchData();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, data, error };
}
