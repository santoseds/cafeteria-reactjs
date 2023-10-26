import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FoodCard from './FoodCard';
import useFoodContext from './hook/useFoodContext';
import { FoodForm } from './FoodForm';
import { useEffect } from 'react';
import DeleteFoodModal from './DeleteFoodModal';

function Food() {
  const {handleCreateFoodForm, foods, getAllFoods} = useFoodContext();

  useEffect(()=>getAllFoods, [foods]);
  
  return (
    <>
    <div className='container'>
    <h1 className="mt-5 text-center">Menu</h1>
    <div className="text-end">
    <Button className="rounded-circle mr-4 font-weight-bold" onClick={handleCreateFoodForm}>
      +
    </Button>
    </div>
    <div mt-5>
    <Row className="mt-2" sm= {6} lg={4} xl={3}>
      {foods.map((food) => (
          <FoodCard food={food} key={food.id} />
        ))}

    </Row>
    </div>
    <FoodForm/>
    <DeleteFoodModal/>
    </div>
    </>  
  )
}

export default Food;