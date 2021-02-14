# react-fancy-hook

## Its a collection of handy react custom hooks

<hr />  

**useInitialMount**  

useInitialMount- returns whether or not the component is mounted. 
Useful for async effect that may return after the component has been unmounted.



```js
const veryFirstRender=useInitialMount();
    //veryFirstRender = > true in the very first render
    //veryFirstRender = > false in the next renders 

```

<hr />

**useUniqueID**  
useUniqueID- returns a unique ID that remains constant across component renders. Great for auto-generating IDs for DOM elements.

```js
const ID= useUniqueID()
```







