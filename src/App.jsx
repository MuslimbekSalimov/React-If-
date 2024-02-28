import React from 'react';
import './App.scss';

function App() {

  const [count, setCount] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [isDisabled, isHasDisabled] = React.useState(true)



  React.useEffect(() => {
    if (count.length >= 3 && age >= 16) {
      isHasDisabled(false)
    } else {
      isHasDisabled(true)
    }
  }, [count, age]);

  return (
    <>
      <form>
        <input
          type="text"
          value={count}
          onChange={(evt) => setCount(evt.target.value)}
          placeholder='name' />

        <input type="number"
          onChange={(evt) => setAge(evt.target.value)}
          placeholder='age'
        />

        <button disabled={isDisabled}>Subb</button>
      </form>
    </>
  );
}

export default App;
