import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";

function App() {
  const { count } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="grid place-content-center py-[10%]">
      <div className="px-[10%] py-[5%] bg-slate-200 border border-black w-[400px] flex">
        <button
          onClick={() => dispatch(increment())}
          className="rounded-md bg-green-400 font-medium text-xl px-3 py-2"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="rounded-md bg-red-400 font-medium text-xl px-3 py-2"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
