import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const OnInputChange = ({target}) =>{
        setInputValue(target.value);
    };
    const onSubmitEvent = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories(categories => [inputValue, ... categories])
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
  return (
    <form onSubmit={onSubmitEvent}>
        <input 
            type="text" 
            placeholder="Categorías"
            value={inputValue}
            onChange={OnInputChange}
        />
    </form>
  )
}
