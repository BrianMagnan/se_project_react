export const weatherOptions = [
  //Day
  {
    day: true,
    condition: "clear",
    url: new URL("/src/assets/Day/Clear.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("/src/assets/Day/Cloudy.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("/src/assets/Day/Rain.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "storm",
    url: new URL("/src/assets/Day/Storm.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("/src/assets/Day/Snow.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("/src/assets/Day/Fog.svg", import.meta.url).href,
  },
  //Night
  {
    day: false,
    condition: "clear",
    url: new URL("/src/assets/Night/Clear.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("/src/assets/Night/Cloudy.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("/src/assets/Night/Rain.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "storm",
    url: new URL("/src/assets/Night/Storm.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("/src/assets/Night/Snow.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("/src/assets/Night/Fog.svg", import.meta.url).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("/src/assets/Day/Default.svg", import.meta.url).href,
  },
  night: {
    url: new URL("/src/assets/Night/Default.svg", import.meta.url).href,
  },
};

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const baseUrl =
  import.meta.env.MODE === "production"
    ? "https://api.BrianWTWRProject.jumpingcrab.com"
    : "http://localhost:3001";

export const coordinates = {
  latitude: 40.7128,
  longitude: -74.006,
};

export const APIkey = "5fb8465f4dc355a99f45a5ada8156af5";
