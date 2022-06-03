import { Component } from 'solid-js';
import { Stars } from 'solid-stars';

const App: Component = () => {
  return (
    <>
      <Stars style={{ color: 'blue' }} initialValue={3} />
      <Stars style={{ color: 'red', width: '50px' }} initialValue={1} disabled={true} />
      <Stars style={{ color: 'green', width: 100, height: '60px' }} initialValue={5} disabled={true} />
      <Stars style={{ color: 'green', width: '200px', 'font-size': 23 }} initialValue={5} maxRating={20} onClick={console.log} />
    </>
  );
};

export default App;
