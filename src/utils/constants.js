  export const coordinates = {
    latitude: 35.149532,
    longitude: -90.048981,
  }

  export const APIkey = "9b5a4f3f92960e681872dac17dcf4a4d";

  export const baseUrl = process.env.NODE_ENV === "production" 
  ? "https://api.wtwrhatch.jumpingcrab.com"
  : "http://localhost:3001";