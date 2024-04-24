import { useSelector, useDispatch } from "react-redux";
import userSlice from "./slices/userSlice";

function App() {
  const user = useSelector((state: any) => state.user);
  const dispatchFunction = useDispatch();
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
    </>
  );
}

export default App;
