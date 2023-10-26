import Food from './Food';
import FoodProvider from './FoodProvider';

function App() { 

  return (
    <FoodProvider>
      <div className="App">
      <Food></Food>
      </div>
    </FoodProvider>
  )
}

export default App
