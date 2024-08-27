## pagination 🤓🤘

There are different types of pagination
1. frontend pagination
2. server-side pagination
3. offset pagination
4. cursor pagination
   
For more info regarding pagination, you can visit this [link](https://glamorous-toucan-f09.notion.site/Pagination-d96d571ff4aa471b9768a2d8b27b46da), where i have talk more about different pagination techniques and there pros and cons.<br/>

To implement this project, i have used `offset pagination` in which we make an API call along with query params like `limit` & `offset` which basically tells how much data i want and how much data should i skip respectively.<br/>
Now when we do `offset pagination`, we need to keep in mind some terminologies like :
1. How much data i want ?
2. What Should be the number of pages ?
<br/>
For specifying the amount of data i want, i kept that as a constant variable<br/>

```
const LIMIT = 10;
```

and suppose we are getting lets say N results from the API call and from this we can calculate the number of pages <br/>
```
numOfPages = Math.ceil(N/LIMIT)
```
A working demo of this project is hosted on this [link](https://66cdbe7399b663ed0d1c7382--glowing-llama-e5b21f.netlify.app/)

[video-preview.webm](https://github.com/user-attachments/assets/09b044ef-ee50-4663-82a5-184482c2b7f4)
