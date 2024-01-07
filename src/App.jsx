
import {useState} from 'react';
import Header from './assets/components/Header/Header';
import CoreConcept from './assets/components/CoreConcept';
import { CORE_CONCEPTS } from './data';
import TabButton from './assets/components/TabButton';
import { EXAMPLES } from './data2';

function App() {
  const[selectedTopic, setSelectedTopic] =useState();
  let tabContent="a";
  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
   
 }
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}

            />
            <CoreConcept {...CORE_CONCEPTS[1]}

            />
            <CoreConcept {...CORE_CONCEPTS[2]}

            />
            <CoreConcept {...CORE_CONCEPTS[3]}

            />
            {/*<CoreConcept
         title="Compoments"
         description="The core UI building block."
         image = {}
  /> cach them du lieu*/ }
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() =>handleClick("components")}>Components</TabButton>
            <TabButton onClick={() =>handleClick("jsx")}>Jsx</TabButton>
            <TabButton onClick={() =>handleClick("props")}>Props</TabButton>
            <TabButton onClick={() =>handleClick("state")}>State</TabButton>
          </menu>
          
            {!selectedTopic && <p>Please select a topic</p> }
            {selectedTopic &&(<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}

              </code>
            </pre>
          </div>)}


        </section>
      </main>
    </div>
  );
}

export default App;