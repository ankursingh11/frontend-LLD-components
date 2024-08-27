## reddit-nested-comments 🤓🤘
Now to implement an UI like reddit nested comment<br/>

<img width="500" alt="nested-comments" src="https://github.com/user-attachments/assets/79beaf02-1cd0-4ce3-a3f6-bfd91ee8cb1f">


we first need to understand the type of `data structure` in which we should store the comment and the replies data.<br/>
For this, i used a static data in my `config` and implemented the following data structure
```
const MESSAGES = [
 {
  comment : "",
  replies : []
 }
]
``` 
and here replies could have something like this nested structure : <br/>
```
replies : [
 {
  comment : "",
  replies : []
 }
]
```
Now to render this onto the UI, we can just loop on the above `COMMENTS` array and whenever we find `replies` which has a `length > 0`, then can recursively call on it. Like this : <br/>
```
const CommentList = ({comment}) => {
 return (
  <div>
   <p>{comment.comment}</p>
   {comment.replies.length > 0 && comment.replies.map(c => <CommentList comment = {c}/>}
  </div>
 )
}
```
Here is a working [link](https://66cd7f3cd1e9df9c72803692--fastidious-gelato-7679e7.netlify.app/) for this project and I used this [reddit source](https://www.reddit.com/r/personalfinanceindia/comments/1f1u8iz/how_people_are_living_in_20k_rupees_a_month/) for reference.

[video-preview.webm](https://github.com/user-attachments/assets/916804a8-2741-4be9-b88d-6052fa3519da)

