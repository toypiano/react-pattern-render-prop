import React from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import CounterProvider from './CounterProvider';
import UpArrowCounter from './UpArrowCounter';

export default function CounterContainer() {
  const [resetCount, setResetCount] = React.useState(0);
  function handleResetClick() {
    setResetCount((c) => c + 1);
  }
  return (
    <div className="App">
      <button className="reset" onClick={handleResetClick}>
        Reset All Counters
      </button>
      {/* React diffs key prop and re-render if changed */}
      <div className="counters" key={resetCount}>
        {/* ClickCounter and HoverCounter are passed separate instances of state and method */}
        <CounterProvider
          render={(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        />
        <CounterProvider
          render={(count, incrementCount) => (
            <HoverCounter count={count} incrementCount={incrementCount} />
          )}
        />
        <CounterProvider
          render={(count, incrementCount) => (
            <UpArrowCounter count={count} incrementCount={incrementCount} />
          )}
        />
      </div>
    </div>
  );
}
