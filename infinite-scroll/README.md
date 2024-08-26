## infinite-scroll 🤓🤘
To implement this demo, we need to understand some js terminologies : <br/>
1.   `document.body.scrollHeight` : total height of the body/webpage <br/>
2.  `window.innerHeight` : the visible section height / height of the viewport<br/>
3.  `window.scrollY` : how much we have scrolled<br/>
<br/>
Now `infinite-scroll` depends on the fact that whether we have reached the end of the page or not and here is how we can check this <br/>
1. We can attach an `eventListener` to the `scroll` event.<br/>

```
window.addEventListener("scroll", handleScroll);
```

2. As soon as we scroll, it will fire a function `handleScroll` which will check whether we have reached the end of the page or not. Here is how we can check that
```
function  handleScroll() {
 if (window.innerHeight  +  window.scrollY  >=  document.body.scrollHeight) {
  fetchMemes();
 }
}
```
Here is working link for the project [here](https://66cc39f8e850fcadba4465b1--dancing-cheesecake-03e2ed.netlify.app/)

[video-preview.webm](https://github.com/user-attachments/assets/178d9dd3-8476-400a-907d-390725f3201f)
