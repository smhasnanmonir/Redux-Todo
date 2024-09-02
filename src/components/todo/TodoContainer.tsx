import { useAppSelector } from "@/redux/hooks";

import AddToModal from "./AddToModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetRandomUsersQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  console.log(todos);
  const { data, isLoading, isError, isSuccess } =
    useGetRandomUsersQuery(undefined);
  console.log(data);
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);
  return (
    <div>
      <div className="flex space-x-3 py-3">
        <TodoFilter></TodoFilter>
        <AddToModal></AddToModal>
      </div>
      <div className="bg-red-300 w-full h-[500px] rounded-md p-3 space-y-3">
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            id={todo.id}
            title={todo?.title}
            description={todo?.description}
            isCompleted={todo.isCompleted}
          ></TodoCard>
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
