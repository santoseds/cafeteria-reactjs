import { FoodContext } from "../FoodContext";
import { useContext } from "react";

export default function useFoodContext(){
    const context = useContext(FoodContext);
        if (context === undefined){
            throw new Error('No context!');
        }
        return context;
}