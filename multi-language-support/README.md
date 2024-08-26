## multi-language-support 🤓🤘
I have demonstrated this project for the languages `russian`, `english`, `hindi`, `spanish`. <br/>
Here the user can select the language for from the `Navbar` itself. <br/>
For managing a global context for this demo, i used react `createContext`, since the application is itself is small and hence no need to use a big state management library like `react-redux`, `zustand`, etc.
```
import { createContext } from  "react";

const  langContext  =  createContext({
	lang:  "en",
});
```
Here is a working demo [link](https://66cc1e554600d7e758d95038--zesty-lamington-c403e7.netlify.app/) of this project

[video-preview.webm](https://github.com/user-attachments/assets/6006e883-877a-4456-8564-350914211788)
