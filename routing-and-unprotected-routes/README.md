## routing-and-unprotected-routes 🤓🤘
For handling routing inside the react-app, i used `react-router-dom`. 
Instead of checking on the fly or have some sort of ternary navigation like, 
```
<BrowserRouter>
	<Routes>
		{ isAuthenticated 
		? <Route path = "/profile" element = {<Profile/>}/> 
		: <Route path = "/login" element = {<Login/>}/>
		}
	</Routes>
</BrowserRouter>
```
It is always better to have a wrapper and then encapsulate your `protected-route` logic inside that wrapper.
```
<Route path = "/" element = {<ProtectedRoute/>}> 
	<Route path = "/about" element = {<about/>}><Route/> 
<Route/>
``` 
```
ProtectRoute.js

const ProtectedRoute = ({element}) => { 
	const isAuthenticated = false; 
	return isAuthenticated ? element : <Navigate to = "/login"/> 
} 
export default ProtectedRoute
```
Here is working [link](https://66cb01b4f02c1be78016b878--willowy-griffin-2184b3.netlify.app/) for the project 🥸

[routing-and-protected-route.webm](https://github.com/user-attachments/assets/9952d75b-4911-48ad-96fa-6affde913c30)
