## accordion 🤓🤘
In the project the first accordion item is always going to be open. <br/>
Instead for each `<AccordionItem/>` to have its seperate state, i have `lifted the state up` to the parent `<Body/>` component and pass the opening and closing states to the children component.<br/>
For this to happen, i have implemented the below logic
```
const [openIndex, setOpenIndex] =  useState(0);

<AccordionItem
	{...ele}
	last = {i===DATA.length-1}
	open={openIndex === i}
	setOpen={() =>
		openIndex  ===  i  
		?  setOpenIndex(null) 
		:  setOpenIndex(i)
	}
/>

```
I have used a constant data for the headings and the description. However, these can also come from an API.<br/>
A working link for this project is [here](https://66cc2fb62f99f1aaac90fef0--inspiring-rabanadas-24776c.netlify.app/)

[video-preview.webm](https://github.com/user-attachments/assets/895806a6-b75e-4564-a53c-86708ec4676f)
