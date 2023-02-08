
import './index.css'; 

import { 

  profileEditorPopup, 
  profileEditButton,
 

  addCardPopup, 
  additorOpenButton,
  additorSaveButton,


  imagePopup, 
  

  elements,
 

  nameInput, 
  jobInput, 
  profileName, 
  profileProfession, 

  initialCards, 
  validateData,  
} from './utils/utils.js'; 

import { Section } from './script/Section.js'; 

import {  Card } from './script/Card.js'; 

import { FormValidator} from './script/FormValidator.js';

import { UserInfo } from './script/UserInfo.js'; 

import { PopupWithImage } from './script/PopupWithImage.js'; 

import { PopupWithForm } from './script/PopupWithForm.js'; 
// Executable Part
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


// Description Part
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////





const formProfileValidator = new FormValidator(validateData.formProfileSelector, validateData); 
  formProfileValidator.enableValidation() 
  
  const formCardValidator = new FormValidator(validateData.formCardSelector, validateData); 
  formCardValidator.enableValidation() 



  //////////////





// Инициализация EditForm
const editProfileForm = new PopupWithForm( 
  profileEditorPopup, 
  {formSubmitHandler: (item) => { 
    userInfo.setUserInfo(item); 
  }} 
) 

editProfileForm.setEventListeners(); 

const userInfo = new UserInfo({ 
  profileName: profileName, 
  profileDescription: profileProfession, 
}) 

/////// Open EditForm
profileEditButton.addEventListener('click', () => {
  formProfileValidator.disableSubmitButton(additorSaveButton);  
  editProfileForm.openPopup(); 

  const data = userInfo.getUserInfo(); 

  nameInput.value = data.name; 
  jobInput.value = data.profession; 

}); 


/////// Инициализация Добавлятора Additor
const addCardForm = new PopupWithForm( 
  addCardPopup, 
  {formSubmitHandler: (item) => { 
    card(item); 
  } 
} 
); 

addCardForm.setEventListeners(); 

//открытие редактора карточки 
additorOpenButton.addEventListener('click', () => { 
  formCardValidator.disableSubmitButton(additorSaveButton); 
  addCardForm.openPopup(); 
}); 




//Инициализация попапа с картинкой 
const popupImg = new PopupWithImage(imagePopup); 
popupImg.setEventListeners(); 

function handleCardClick_(item_) {
  console.log('item_ = ', item_);
  console.log('item_.srcElement = ', item_.srcElement);
  const target_item = {
    name: item_.srcElement.alt, 
    link: item_.srcElement.src,
  };
  popupImg.openPopup(target_item); 

}

function card(item) { 
  console.log('lala1')
  const card_object = new Card( 
  item, '#element', {handleCardClick: handleCardClick_}); 
  console.log('card_object = ', card_object)
  card_object.generateCard();
  const elem = card_object.getElement();
  console.log('elem = ', elem);
  cardList.addItem(elem);
  
}


//Инициализация карточек 
const cardList = new Section({ 
  items: initialCards, 
  renderer: card
}, elements); 


console.log('cardList = ', cardList)

//Отрисовка карточек 
cardList.renderItems()











