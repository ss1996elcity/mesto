export class UserInfo { 

    constructor({ profileName, profileDescription, formSelector}) { 
      this._profileName = profileName; 
      this._profileDescription = profileDescription; 
    } 
  
    getUserInfo() { 
      const data = { 
        name: this._profileName.textContent, 
        profession: this._profileDescription.textContent 
      } 
      return data; 
    } 
  
    setUserInfo(item) { 
      this._profileName.textContent = item.name; 
      this._profileDescription.textContent = item.profession; 
    } 
  } 