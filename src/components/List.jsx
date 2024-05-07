import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

const List = ({ deleteItem }) => {
  const [elems, setElems] = useState(["Elem1", "Elem2", "Elem3"]);
  // TODO Создайте компонент , который будет отображать список элементов и предоставлять возможность удалять каждый элемент из списка. Используйте состояние для хранения списка элементов и обновляйте его при удалении элемента.

  return (
    <div>
      <h2>Список элементов</h2>

      <ul>
        {elems.map((elem, index) => (
          <li key={index}>
            {elem}
            <button onClick={() => deleteItem(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
