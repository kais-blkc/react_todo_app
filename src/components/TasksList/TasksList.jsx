import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import TasksInfo from './TasksInfo';
import TasksItem from './TasksItem';
import { useDispatch } from 'react-redux';
import { updateTasksList } from '../../redux/tasksSlice';

export default function TasksList() {
  const tasks = useSelector((state) => state.tasks.tasksList);
  const dispatch = useDispatch();

  function onDragEndHandler(result) {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedIrem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedIrem);

    dispatch(updateTasksList(items));
  }

  let tasksList = tasks.length ? (
    tasks.map((item, index) => (
      <TasksItem
        key={item.id}
        item={item}
        index={index}
      />
    ))
  ) : (
    <p className="tasks-empty">
      У вас еще нет зарегистрированных задач
      <br />
      Создавайте задачи и организуйте свои дела
    </p>
  );

  return (
    <>
      <TasksInfo tasks={tasks} />

      <DragDropContext onDragEnd={onDragEndHandler}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div
              className="tasks-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasksList}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
