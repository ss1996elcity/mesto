export class Popup { 
    constructor(popupSelector) { 
      this._popupSelector = popupSelector; 
      this.escClose = this._handleEscClose.bind(this) 
    } 
  
    _handleEscClose(evt) { 
      if(evt.key === 'Escape') { 
        this.closePopup(); 
      } 
    } 
  
    setEventListeners() { 

      this._popupSelector.querySelector('.popup__close-button').addEventListener('click',  this.closePopup.bind(this))
  
      this._popupSelector.addEventListener('click', (evt) => { 
        if(!evt.target.closest('.popup__form')) { 
          this.closePopup(); 
        } 
  
      }) 
  
    } 
  
    openPopup() { 
      this._popupSelector.classList.add('popup__opened'); 
      this._popupSelector.classList.remove('popup');

      document.addEventListener('keyup', this.escClose); 
  
    } 
  
    closePopup() { 
        this._popupSelector.classList.remove('popup__opened'); 
        this._popupSelector.classList.add('popup');
      document.removeEventListener('keyup', this.escClose); 
    } 
  } 