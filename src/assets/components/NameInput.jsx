import React, { useState, useEffect } from 'react';

export default function NameInput ({ onSave, editedIndex, namesList }) {
  const [name, setName] = useState('');

  useEffect(() => {
    // If there's an edited index, populate the input with the corresponding name
    if (editedIndex !== null) {
      setName(namesList[editedIndex]);
    }
  }, [editedIndex, namesList]);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSave = () => {
    onSave(name);
    setName(''); // Clear the input after saving
  };

  return (
    <div>
      <label>
        EnterName: 
        <input type="text" value={name} onChange={handleInputChange} />
      </label>
      <button onClick={handleSave}>{editedIndex !== null ? 'Update' : 'Save'}</button>
    </div>
  );
};


