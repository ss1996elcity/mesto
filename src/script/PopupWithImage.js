import { Popup } from './Popup.js' 
import {  
  imagePopup, 
  imageTitle, 
  imageSrc,
   } from '../utils/utils.js'; 
   


 

export  class PopupWithImage extends Popup { 
  constructor(popupSelector) { 
    super(popupSelector) 
  } 

  openPopup(item) { 
    console.log('item = ', item)
    console.log('item.name = ', item.name);
    console.log('item.link = ', item.link);
    imageTitle.textContent = item.name; 
    imageSrc.src = item.link; 
    super.openPopup(); 
  } 
} 