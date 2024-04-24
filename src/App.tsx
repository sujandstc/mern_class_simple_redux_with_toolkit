import { useSelector, useDispatch } from "react-redux";
import userSlice from "./slices/userSlice";
import { useState } from "react";
import axios from "axios";
import moviesSlice from "./slices/moviesSlice";

function App() {
  const user = useSelector((state: any) => state.user);
  const movies = useSelector((state: any) => state.movies);

  const dispatchFunction = useDispatch();

  const getMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.dynoacademy.com/test-api/v1/movies"
      );
      dispatchFunction(
        moviesSlice.actions.updateMovies({
          moviesData: response.data.moviesData,
        })
      );
    } catch (e) {}
  };

  return (
    <>
      Hello world!
      {user.name}
      <button
        onClick={() => {
          const payload = {
            name: "Hari",
          };
          dispatchFunction(userSlice.actions.updateName(payload));
        }}
      >
        Change name
      </button>
      {/* For movies data */}
      <hr />
      <button
        onClick={() => {
          getMovies();
        }}
      >
        Get movies
      </button>
      {movies.moviesData.map((singleMovie: any) => (
        <>{singleMovie.name}</>
      ))}
    </>
  );
}

export default App;
