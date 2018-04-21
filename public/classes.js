class User {
  constructor(pIdNumber, pName1, pName2, pLastName1, pLastName2, pEmail, pBirthDate, pPhone, pPassword ) {
    this._id = 0;  
    this.idNumber = pIdNumber;
      this.name1 = pName1; 
      this.name2 = pName2; 
      this.lastName1 = pLastName1;
      this.lastName2 = pLastName2;
      this.email = pEmail;
      this.birthDate = pBirthDate;
      this.phone = pPhone;
      this.password = pPassword;  
  }
  setId(pId){
    this._id = pId;
  }
}