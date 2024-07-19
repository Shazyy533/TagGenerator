import React, { useState } from "react";
import "./TagGenerator.css";

const TagGenerator = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);

  const addTag = () => {
    if (inputValue.trim() !== "" && !tags.includes(inputValue.trim())) {
      setTags([...tags, inputValue.trim()]);
      setCount(count + 1);
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
    setCount(count - 1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (count <= 20) {
        addTag();
      }
    }
  };

  return (
    <>
      <h1>Tag Generator App</h1>
      <div className="tag-generator">
        <div className="tag-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter a tag..."
          />
        </div>
        <button onClick={handleKeyDown} className="tag-btn">
          Add Tag
        </button>

        <div className="tag-count">Number of tags: {count}</div>
        <div className="remove-btn">
          {tags.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
              <button onClick={() => removeTag(tag)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TagGenerator;
