## Youtube live stream Chat UI 🤓🤘
For developing this UI, we first have to brainstorm on the following points :-
1. How to handle soo many chats ? Because lets say we have 1000 chats and the chats keep on adding and hence the page size will increase which will result in performance issues
2. Is every message required ?
3. Should the UI component displays message in real time ?
4. What type of service we should use to have get chats ? A discussion over `Websockets` vs `API Polling`
<br/>

> For more info regarding `Real Time Updates`, you can visit my [blog](https://glamorous-toucan-f09.notion.site/Real-Time-Updates-12512ef3989b447eb323be5e5dce4436?pvs=25)

Taking `youtube chat UI` as a reference, we get to know youtube too uses `API polling` and fetches new chat messages in an interval of `25s` for now. <br/>

### Why we should not use websockets ?
Basically how web sockets work is that there is a connection between users and lets say a live stream has 3000 users watching at a current time, then having 3000 web sockets connections will be a bottleneck

### Handling Too many chats ? Should we render all ?
NO !!! Rendering an UI with too many chats will just increase the page size and our  page will explode hence downsizing our page performance. To handle this issue, `chat-ui` keeps a track of number of chats/messages and when this chats/messages exceed a certain threshold, it basically removes the earlier chat/messages from the UI

To implement this project, i have used an array of objects for my chat messages, like
```
const CHAT_MESSAGES = [
 {
   name : "",
   message : "",
 },
 {
   name : "",
   message : "",
 },
 .
 .
 .
]
```
and used a setInterval function to display the chat on the UI every x seconds
```
let  intervalId  =  setInterval(() => {
 let  newChats  = [...chats,{ 
   name:  generateRandomName(), 
   message:  generateRandomText(10) 
  },
];
 if (newChats.length  >  50) {
  newChats.splice(0, LIMIT);
 }
 setChats(newChats);
}, 1000);
// for cleanup
 return () =>  clearInterval(intervalId);
}, [chats]);
```
A working demo of this project is hosted [here](https://66cf0d956e38434bc7ff62b4--frolicking-cendol-414920.netlify.app/)

[video-preview.webm](https://github.com/user-attachments/assets/6cf64b46-43e4-47b5-910f-92ab1af9cba8)
