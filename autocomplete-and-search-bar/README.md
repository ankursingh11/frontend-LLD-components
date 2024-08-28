## Autocomplete & Search bar 🤓🤘
To develop this demo i have used the standard Google Search API
```
export const SEARCH_API = "https://www.google.com/complete/search?&client=chrome&q="
```
I have also initialised a state `searchQuery` which will be passed as a query param to the above `SEARCH_API`
```
const [searchQuery, setSearchQuery] = useState("");
```

Concepts which are very handful while developing this demo :
1. Debouncing
2. Caching
   
For `Debouncing`, i have used `setTimeout` which will only call the above and fetch result every `200ms`

```
useEffect(() => {
 let  timerId  =  setTimeout(() => {
   fetchData();
 }, 200);
 return () => {
  clearTimeout(timerId);
 };
}, [searchQuery]);
```

And for `caching` I have maintained a state `cache` in which fetch results will be stored if there are not in that already

```
const [cache, setCache] = useState({});
const fetchData = async () => {
 if (cache[searchQuery]){
  setSearchResult(cache[searchQuery]);
  return;
 } else {
  const response = await fetch(SEARCH_API + searchQuery);
  const json = await response.json();
  setSearchResult(json[1]);
  setCache({...cache,[searchQuery]: json[1]});
 }
};
```

A working demo of this project is hosted [here](https://66cee6816a57c211383de177--tangerine-kulfi-ddd790.netlify.app/)

[video-preview.webm](https://github.com/user-attachments/assets/58cf6cd3-2c79-4207-896c-d56fcb1ddde9)



