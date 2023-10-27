import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import useFoodContext from './hook/useFoodContext';

function FoodCard({food, key}){
    const {handleUpdateFoodForm, handleDeleteFoodModal} = useFoodContext();
    function teste(food){
        handleDeleteFoodModal(food);
    }

    return(
        <Col sm={6} lg={3} xl={3} className="mb-3" key={key}>
            <Card bg="light" >
                <Card.Header className="text-center fw-bold " style={{ backgroundColor: "red" , color:"white"}}>
                    {food.name}
                    <spam className="float-end">
                    <FaTrashAlt onClick={()=>{teste(food)}}/>{' '}
                    <FaPencilAlt onClick={()=>{handleUpdateFoodForm(food)}}/>
                    </spam>
                </Card.Header>                    
                <Card.Img variant="top" src={food.image} alt={food.name}  style={{height:"250px", borderRadius:"0"}} />    
            </Card>  
        </Col>  
    );
}

export default FoodCard;