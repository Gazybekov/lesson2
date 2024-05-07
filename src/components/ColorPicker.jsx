import React, { useState } from "react";

const ColorPicker = () => {
  // TODO Создайте компонент ColorPicker, который представляет собой выпадающий список с несколькими цветами. При выборе цвета из списка, цвет фона страницы должен изменяться на выбранный цвет.
  const [selectedColor, setSelectedColor] = useState("");
  const handleColor = (e) => {
    console.log(e.target.value);
    const newColor = e.target.value;
    console.log(newColor);
    setSelectedColor(newColor);
  };

  return (
    <div>
      <h2>Выбор цвета</h2>
      <select value={selectedColor} onChange={handleColor}>
        <option value="">Выберите цвет</option>
        <option value="red">Красный цвет</option>
        <option value="green">Зеленый цвет</option>
        <option value="blue">Синий цвет</option>
      </select>
      <div
        style={{
          width: "100px",
          height: "100px",
          marginTop: "10px",
          backgroundColor: selectedColor,
        }}
      ></div>
    </div>
  );
};

export default ColorPicker;
