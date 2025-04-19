// fetchFromThingspeak.js
const axios = require('axios');

const API_URL = "https://api.thingspeak.com/channels/2889461/feeds.json";
const READ_API_KEY = "4ISU5Q28HQT1GUEE";

const fetchThingSpeakData = async () => {
  try {
    const response = await axios.get(`${API_URL}?api_key=${READ_API_KEY}&results=10`);
    const data = response.data.feeds;
    console.log("Fetched ThingSpeak Data:", data);
  } catch (error) {
    console.error("Error fetching ThingSpeak data:", error);
  }
};

fetchThingSpeakData();
