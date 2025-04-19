import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const API_URL = "https://api.thingspeak.com/channels/2889461/feeds.json";
const READ_API_KEY = "4ISU5Q28HQT1GUEE";

const useAutoUpdate = (interval = 60 * 60 * 1000, results = 1) => {
  const [data, setData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}?api_key=${READ_API_KEY}&results=${results}`);
      const latestFeed = response.data.feeds[response.data.feeds.length - 1];
      setData(latestFeed);
      setLastUpdated(new Date());
    } catch (error) {
      console.error("Error fetching ThingSpeak data:", error);
    } finally {
      setLoading(false);
    }
  }, [results]);

  useEffect(() => {
    fetchData(); // Initial fetch
    const intervalId = setInterval(fetchData, interval); // Auto fetch

    return () => clearInterval(intervalId); // Cleanup
  }, [fetchData, interval]);

  return { data, lastUpdated, fetchData, loading };
};

export default useAutoUpdate;
