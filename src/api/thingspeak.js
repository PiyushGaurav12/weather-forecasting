// src/api/thingspeak.js
import axios from 'axios';

const API_URL = "https://api.thingspeak.com/channels/2889461/feeds.json";
const READ_API_KEY = "4ISU5Q28HQT1GUEE";

export const fetchThingSpeakData = async () => {
  try {
    const response = await axios.get(`${API_URL}?api_key=${READ_API_KEY}&results=10`);
    const data = response.data.feeds;
    console.log("Fetched ThingSpeak Data:", data); // 👈 This will show data in browser console
    return data;
  } catch (error) {
    console.error("Error fetching ThingSpeak data:", error);
    return [];
  }
};
