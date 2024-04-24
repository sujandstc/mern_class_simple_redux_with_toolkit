import { configureStore } from "@reduxjs/toolkit";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import userSlice from "./slices/userSlice.tsx";
import moviesSlice from "./slices/moviesSlice.tsx";

// Creating a browser database.. redux calls it store... its like a mongodb collection but for browser..

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
