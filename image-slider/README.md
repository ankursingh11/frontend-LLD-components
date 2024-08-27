## image-slider 🤓🤘
For this demo, i used some random images. <br/>
The logic is pretty simpe :
1. To have the index, we can use a state, `index` which will store the index of the current image to be shown and we can store all our images in an array
```
const [currIndex, setIndex] =  useState(0);
.
const IMAGES = [img1, img2, img3, img4, img5];
```
2. To show next image, we can have the followling logic
```
function nextImage() {
  setIndex(index  => (index+1)%DATA.length);
}
```
3. And to show prev image
```
function prevImage() {
  setIndex(index  =>  index-1<0?DATA.length-1:index-1);
}
```
Thats it 🥸 <br/>
Here is a working [link](https://66cd8fe20a0f55b67de2ee4f--gregarious-pithivier-4ae3f1.netlify.app/) of the demo.

[video-preview.webm](https://github.com/user-attachments/assets/0e77a84c-c137-49e1-8e79-a3f3e7fd3844)
