import React from "react";
import './SelectItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const SelectItem=({selectedItem, handleRemoveItem})=>{
    const {name, img} = selectedItem;


    return(

    <div className='selected-item'>
    <img src={img} alt="" />
            <p>{name}</p>
            <FontAwesomeIcon onClick={ () => handleRemoveItem(selectedItem)} icon={faTrash}></FontAwesomeIcon>
    </div>
    );
}
export default SelectItem;