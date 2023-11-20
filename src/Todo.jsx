import { computed, signal } from "@preact/signals";

const todos = signal([
  { task: "Go to the bank", completed: true },
  { task: "Get breakfast", completed: false },
  { task: "Practice coding", completed: false },
]);

const newTask = signal('')

const addTodo = () => {
  todos.value = [...todos.value, {task: newTask.value, completed: false}]
  newTask.value = ''
}

const completedTodo = computed(() => {
  return todos.value.filter((todo) => todo.completed).length;
});

const removeTask = (index) => {
  todos.value.splice(index, 1)
  todos.value = [...todos.value]
}

//console.log(completedTodo.value)

export function Todo() {
  const input = e => (newTask.value = e.target.value) 
  return (
    <div>
        <input value={newTask.value} placeholder='Enter task here' onInput={input}/>
        <button onClick={addTodo}>Add todo</button>
        {todos.value.map ((todo,index) => {
          return (
            <ul>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onInput={() => {
                      todo.completed = !todo.completed;
                      todos.value = [...todos.value];
                    }}
                  />
                  {todo.completed ? <s>{todo.task}</s> : todo.task}
                </label>
                <button onClick={() => removeTask(index)}>❌</button>
              </li>
            </ul>
          );
        })}
        <p>{completedTodo}</p>
    </div>
  )
}

