
import Header from './assets/components/Header/Header';
import CoreConcept from './assets/components/CoreConcept';
import { CORE_CONCEPTS } from './data';

function App() {
  return (
    <div>
      <Header/>
      <section id="core-concepts">
      <main>
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
        
      </main>
      </section>
      
    </div>
  );
}

export default App;