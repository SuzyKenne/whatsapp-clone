# Zustand Guide

## Installation
To install Zustand in your project, run:
```sh
npm install zustand
```

---

## Setting Up a Store
Create a `store` folder and add a file named `useStore.js`:

```javascript
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
```

---

## Using the Store in a Component
Import and use the store inside your component:

```javascript
import useStore from '../store/useStore';

const Counter = () => {
  const { count, increase, decrease } = useStore();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Counter;
```

---

## Running the Project
Make sure your project is running with:
```sh
npm start
```
Then, include the `Counter` component in your main `App.js` or another component.

---

## Summary
✅ Installed Zustand
✅ Created a store
✅ Used it in a component
✅ Updated the state globally 🎉


