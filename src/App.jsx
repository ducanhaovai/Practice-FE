
import NamesTable from './assets/components/NamesTable';
import Header from './assets/components/Header/Header';
import CoreConcepts from './assets/components/CoreConcepts';
import Examples from './assets/components/Examples';
import NameInput from './assets/components/NameInput';
import { useState } from 'react';

function App() {
  const [namesList, setNamesList] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);

  const handleSave = (newName) => {
    if (editedIndex !== null) {
      // If there's an edited index, update the name at that index
      const updatedNames = [...namesList];
      updatedNames[editedIndex] = newName;
      setNamesList(updatedNames);
      setEditedIndex(null); // Reset editedIndex
    } else {
      // Otherwise, add the new name to the list
      setNamesList([...namesList, newName]);
    }
  };

  const handleEdit = (index) => {
    setEditedIndex(index);
  };



  return (
    <>


      <Header onSave={handleSave} editedIndex={editedIndex} namesList={namesList}  />

      <main>
      
      <NamesTable names={namesList} onEdit={handleEdit} />
        <Examples />
      </main>
    </>
  );
}

export default App;