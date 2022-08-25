import { useState, useEffect } from 'react';
import { IReport } from '../../types';
import { API_URL } from '../constants';

const useReport = () => {
  const [reportData, setReportData] = useState<IReport>();
  const [fetching, setFetching] = useState(true);

  const fetchReport = async () => {
    const response = await fetch(API_URL, { method: 'GET' });
    const json = await response.json();
    setReportData(json.record);
    setFetching(false);
  };

  useEffect(() => {
    fetchReport();
  }, []);

  return { data: reportData, fetching };
};

export default useReport;
