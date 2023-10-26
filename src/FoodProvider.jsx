import { useState } from "react";
import { FoodContext } from "./FoodContext";
import { createFood } from "./apiFood";
import { updateFood } from "./apiFood";
import { deleteFood } from "./apiFood";

export default function FoodProvider({children}){
    const emptyFood = {
        name:"",
        image:""
    }
 
    function handleCreateFoodForm(){
        setSelectedFood(emptyFood);
        toggleFoodForm();
        setTypeFoodForm('create');
    }

    function handleUpdateFoodForm(food){
        setSelectedFood(food);
        setTypeFoodForm('update');
        toggleFoodForm();       
    }

    const handleSubmitFoodForm = (food)=>{
        if(typeFoodForm === 'create'){
            createFood(food);
        }else{
            updateFood(selectedFood, food);
        }
        toggleFoodForm();
    }

    function handleDeleteFoodModal(food){
        
        setSelectedFood(food);
        toggleDeleteFoodModal();        
      }

      function handleDeleteFood(){
        deleteFood(selectedFood);
        const newFoo = foods.filter(food=> food.id !== selectedFood.id);
        setFoods(newFoo);
        toggleDeleteFoodModal();
      }

    async function getAllFoods(){ 
    let foo = [];
        await fetch('http://localhost:4000/foooods/')
         .then(res=>res.json()).then(data=> {
            foo = data;
            setFoods([...foo]);
            return     
          }
          ).catch(err=> console.log(err));
      }

      const [showFoodForm, setShowFoodForm] = useState(false);
      const toggleFoodForm =()=>{setShowFoodForm(!showFoodForm)};
      const[showDeleteFoodModal, setShowDeleteFoodModal] = useState(false);
      const toggleDeleteFoodModal = ()=>{setShowDeleteFoodModal(!showDeleteFoodModal)};
      const [selectedFood, setSelectedFood] = useState(emptyFood);
      const [typeFoodForm, setTypeFoodForm] = useState('create');
      const [foods, setFoods] = useState([]);

    return(
        <FoodContext.Provider value={{ selectedFood, showFoodForm, toggleFoodForm, 
        handleCreateFoodForm, typeFoodForm, handleSubmitFoodForm,foods, setFoods, 
        getAllFoods, handleUpdateFoodForm, handleDeleteFoodModal, toggleDeleteFoodModal, 
        handleDeleteFood, showDeleteFoodModal
        }}>
            {children}
        </FoodContext.Provider>

    )
}