import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

// Use React Dev Tools profiles to learn more about components and functions.
// Using the profiler to test parts of the app and the firegraph to display it.

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
    // console.log(chosenCount) This wont work.
    // React does State batching. Batched together for one component function
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
        {/* STATE is scoped to a component */}
        {/* <Counter initialCount={chosenCount} /> */}
      </main>
    </>
  );
}

export default App;
