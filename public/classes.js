class User {
  constructor(pIdNumber, pName1, pName2, pLastName1, pLastName2, pEmail, pBirthDate, pPhone, pPassword, pType) {
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
    this.type = pType;
    this.state = '';
  }
  setId(pId) {
    this._id = pId;
  }
  changeState(pState) {
    this.state = pState;
  }
}

class Hotel {
  constructor(pName, pLatitude, pLongitude, pProvince, pCanton, pDistrict, pExactDirection, pServicePhone, pServiceEmail, pReservationPhone, pReservationEmail, pPhoto) {
    this._id = 0;
    this.name = pName;
    this.latitude = pLatitude;
    this.longitude = pLongitude;
    this.province = pProvince;
    this.canton = pCanton;
    this.district = pDistrict;
    this.exactDirection = pExactDirection;
    this.servicePhone = pServicePhone;
    this.serviceEmail = pServiceEmail;
    this.reservationPhone = pReservationPhone;
    this.reservationEmail = pReservationEmail;
    this.photo = pPhoto;
    this.state = '';
    this.rating = 0;
    this.ratingQuant = 0;
  }
  
  addRatingQuant(){
    this.ratingQuant++;
  }
  setRating(pRate){
    this.rating = pRate;
  }
  changeState(pState) {
    this.state = pState;
  }
  setId(pId) {
    this._id = pId;
  }
  getLocation() {
    return `${this.latitude}, ${this.longitude}`;
  }

  getDirection() {
    return `${this.province}, ${this.canton}, ${this.district}`;
  }

}