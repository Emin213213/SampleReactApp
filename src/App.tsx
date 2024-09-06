import React, { useState, useEffect, ChangeEvent } from "react";

interface Comment {
  id: number;
  body: string;
}

const Over: React.FC = () => {
  const [use, setConser] = useState<Comment[]>([]);
  const [selectedText, setSelectedText] = useState<string>("");

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/albums").then((res) =>
        res.json()
      ),
    ])
      .then(([data]) => {
        setConser(data.slice(0, 20));
      })
      .catch((error) => console.error("Error fetching data:", error)); // Обработка ошибок
  }, []);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    const selectedOption = use.find(
      (item) => item.id.toString() === selectedId
    );
    setSelectedText(selectedOption ? selectedOption.body : ""); // Используем 'body' как пример текста
  };

  return (
    <>
      <select name="Shop" id="shop-select" onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {use.map(({ id }) => (
          <option key={id} value={id}>
            Option {id}
          </option>
        ))}
      </select>

      {selectedText && <p>Selected Text: {selectedText}</p>}
    </>
  );
};

export default Over;
