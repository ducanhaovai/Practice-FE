
import imgReacte from "../../img/react-core-concepts.png";
import React, { useState, useEffect } from 'react';


import './Header.css'

export default function Header({ onSave, editedIndex, namesList }){
  const [name, setName] = useState('');
  
  
  const handleSave = () => {
    onSave(name);
    setName(''); // Clear the input after saving
  };
  useEffect(() => {
    // If there's an edited index, populate the input with the corresponding name
    if (editedIndex !== null) {
      setName(namesList[editedIndex]);
    }
  }, [editedIndex, namesList]);
  

  
  function handleInputChange  (event)  {
    setName(event.target.value);

  }


  

    return (<header>
           <img src={imgReacte} alt="Stylized atom" />
           <h1>{name}</h1>
           <p>
              React concepts you will need for almost any app you are
             going to build!
           </p>
           <div className="container">
           <input type="text" required value={name} onChange={handleInputChange} />
           <button id="updateButton" onClick={handleSave}>{editedIndex !== null ? 'Update' : 'Save'}</button>

           </div>
           
            
           
           
           

           

         </header>
    );
}
