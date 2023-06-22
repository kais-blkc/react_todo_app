import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function TestDnd() {
  const users = [
    { id: 'id-1', name: 'Brice Li' },
    { id: 'id-2', name: 'Chang Vu' },
    { id: 'id-3', name: 'Mao ce dun' },
  ];

  const [list, setList] = useState(users);

  function onDragEndHandler(result) {
    if (!result.destination) return;

    const items = Array.from(list);
    const [reorderedIrem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedIrem);

    setList(items);
  }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEndHandler}>
        <Droppable droppableId="list">
          {(provided) => (
            <ul
              className="w-80 mx-auto mt-40"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {list.map((user, index) => (
                <Draggable
                  key={user.id}
                  draggableId={user.id}
                  index={index}
                >
                  {(provided) => (
                    <li
                      className="mb-4 border-2 border-sky-500"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {user.id}
                      <p>{user.name}</p>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
