import { useState, useEffect } from 'react';

export interface IInsightDetails {
  title: string;
  onTrackDescription: string;
  offTrackDescription: string;
  details: [
    {
      title: string;
      description: string;
    },
    {
      title: string;
      description: string;
    },
  ];
}

const useInsightDetails = (url?: string) => {
  const [insightData, setInsightData] = useState<IInsightDetails | undefined>();
  const [fetching, setFetching] = useState(true);

  const fetchDetails = async (url: string) => {
    let data: IInsightDetails | undefined;
    try {
      const response = await fetch(url, { method: 'GET' });
      data = await response.json();
    } catch {
      data = undefined;
    }
    setInsightData(data);
    setFetching(false);
  };

  useEffect(() => {
    if (url) {
      fetchDetails(url);
    }
  }, [url]);

  return { data: insightData, fetching };
};

export default useInsightDetails;
