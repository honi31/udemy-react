import Header from "./components/Header/Header.tsx";
import CoreConcept from "./components/CoreConcept.tsx";
import { CORE_CONCEPTS } from "./data.ts";
import TabButton from "./components/TabButton.tsx";
import { useState } from "react";
import { EXAMPLES } from "./data.ts";

type ExampleKeys = keyof typeof EXAMPLES;

function App() {
  const [selectedTopic, setSelectedTopic] = useState<ExampleKeys>();

  function handleSelect(selectedButton: ExampleKeys) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>

          {!selectedTopic ? (
            <p>Please select a button</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>{" "}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
