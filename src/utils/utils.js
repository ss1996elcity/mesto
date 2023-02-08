
//Задание темплейта и формы карточки 
export const elements = '.elements'; 

/////Поля для заполнения
export const cardNameInput           = document.querySelector       ('.popup__input_place'                            );
export const cardLinkInput           = document.querySelector       ('.popup__input_image'                            );
export const cardName                = document.querySelector  ('.element__title'                                );
export const cardLink                = document.querySelector  ('.element__image'                                );


////
export const profileEditorPopup = document.querySelector('.popup_type_edit-profile'); 
export const addCardPopup = document.querySelector('.popup_type_edit-card'); 
export const imagePopup = document.querySelector('.popup_type_image'); 


export const profileEditButton       = document.querySelector      ('.profile__edit-button'                          ); 
export const profileEditCloseButton  = document.querySelector      ('.popup__close-button'                           ); 
export const profileEditSaveButton   = document.querySelector      ('.popup__submit-button'                          ); 
export const profileEditorWindow     = document.querySelector      ('.popup'                                         ); 

export let nameInput                 = document.querySelector      ('.popup__input_name'                             ); 
export let jobInput                  = document.querySelector      ('.popup__input_profession'                       ); 
export let profileName               = document.querySelector      ('.profile__name'                                 ); 
export let profileProfession         = document.querySelector      ('.profile__name_info'                            ); 

export const container               = document.querySelector      ('.elements'                                      );
export const elementTampl            = document.querySelector      ('#element').content.querySelector('.element'     ); 
export const cardSelector = document.querySelector('.card-template');

export const additor                 = document.querySelector      ('.additor'                                       );
export const additorOpenButton       = document.querySelector      ('.profile__add-button'                           );
export const additorCloseButton      = document.querySelector       ('.additor__close-button'                         );
export const additorSaveButton       = document.querySelector       ('.popup__submit-button'                          );  


export const imageTitle              = imagePopup.querySelector    ('.popup__image-title'                            ); 
export const imageSrc                = imagePopup.querySelector    ('.popup__image'                                  ); 
export const imageCloseButton        = imagePopup.querySelector    ('.popup__close-button'                         );






//////массивы

export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];


export const validateData = { 
    formSelector:           '.popup__form', 
    formProfileSelector:    '.popup__form_profile', 
    formCardSelector:       '.additor__form', 
    inputSelector:          '.popup__input', 
    inputValidClass:        'popup__input_valid', 
    inputErrorClass:        'popup__input_invalid', 
    submitButtonSelector:   '.popup__submit-button', 
    activeButtonSelector:   'popup__submit-button_active', 
    disabledButtonSelector: 'popup__submit-button_disabled', 
    errorClass:             'popup__error_visible' 
  } 

  ////создали массив
  export const forms = Array.from(document.querySelectorAll(validateData.formSelector)) 