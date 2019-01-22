export default class Weather {
  constructor(apiKey){
    this.apiKey = apiKey;
    this.locationStatus; //declare status, if location has been fetched, value will be set to true
    this.location; //declare location as undefined, function getLocation() will set it for class
  }
  getLocation() {
    fetch('https://ipinfo.io/json')
      .then((res) => {
        if(!res.ok){
          return this.locationStatus = false;
        } else {
          this.locationStatus = true;
          return res.json();
        }
      })
      .then((data) => {
        this.location = data.loc
      });
  }

}
