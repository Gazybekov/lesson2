import React from "react";
import List from "./components/List";
// ? Import это ключевое слово, используемое в JS (React) для включения функциональности или кода из другого файла (модуля) в текущий файл. Это позволяет использовать переменные, функции, классы и другие элементы из других модулей в текущем коде.

const App = () => {
  const deleteItem = (index) => {
    const updatedElems = [...elems];
    updatedElems.splice(index, 1);
    setElems(updatedElems);
  };
  return (
    <div>
      <List deleteItem={deleteItem} />
    </div>
  );
};
// Это ключевое слово, которое позволяет указать, какие переменные, функции или классы должны быть доступны для использования из других файлов
export default App;
