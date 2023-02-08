


  export class Card                           {

    constructor (data, cardSelector, {handleCardClick}) { 
      this._title = data.name; 
      this._link = data.link; 
      this._cardSelector = cardSelector; 
      this._handleCardClick = handleCardClick;
     
      this._element = undefined;
  
    } 
  
    _getTemplate() { 
      const cardElement = document 
      .querySelector(this._cardSelector) 
      .content 
      .querySelector('.element') 
      .cloneNode(true); 
      return cardElement; 
    } 
    
    _setEventListeners() { 
      
      //открытие попапа с картинкой 
  
      this._element.querySelector('.element__image').addEventListener('click', (e) => { 
        this._handleCardClick(e); 
      }) 
  
    
      //Обработчик лайка 
      const elementLike = this._element.querySelector('.element__like-button'); 
      elementLike.addEventListener('click', () => { 
        elementLike.classList.toggle('element__like-button'); 
        elementLike.classList.toggle('element__like-button-heart_active'); 
      }); 
  
      //Обработчик удаления 
      this._element.querySelector('.element__delete-button').addEventListener('click', (e) => {
        e.target.closest('.element').remove() 
      }); 
      
      
    }
  
    generateCard() { 
      this._element = this._getTemplate(); 
      const elementImage = this._element.querySelector('.element__image'); 
      this._setEventListeners(); 
      elementImage.src = this._link; 
      elementImage.alt = this._title; 
      this._element.querySelector('.element__title').textContent = this._title;  
    } 
  
    getElement() {
      return this._element;
    }
  
    getCard() {
      const cardObject = {
        name: this._title,
        link: this._link,
      };
      return cardObject;
    }
  
  };
  