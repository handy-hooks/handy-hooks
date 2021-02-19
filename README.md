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

**usePrevious**
usePrevious-returns the previous value of a prop or state.

```js
const previousValue=usePrevious()
```


**useIsMounted**
useIsMounted- return a function you can call it to be sure if the component is mounted or not. 
the best use case is in async function and set state.

Example
```js
const Results = () => {
  const [items, setItems] = useState([])
  const isMounted = useIsMounted()

  useEffect(() => {
    fetchItems().then((newItems) => {
      // only set state if the component
      // is still mounted after receiving
      // the async data
      if (isMounted()) {
        setItems(newItems)
      }
    })
  }, [isMounted])

  // render UI
}
```


