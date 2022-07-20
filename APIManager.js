class APIManager {
  constructor() {
    this.data = {};
  }

  getData = () => this.data;

  saveUserInfo = (response) => {
    this.data.fName = response.results[0].name.first;
    this.data.lName = response.results[0].name.last;
    this.data.imgURL = response.results[0].picture.large;
    this.data.city = response.results[0].location.city;
    this.data.state = response.results[0].location.state;

    this.data.friends = [];
    for (let i = 1; i < response.results.length; i++) {
      this.data.friends.push({
        fName: response.results[i].name.first,
        lName: response.results[i].name.last,
      });
    }
  };

  getAQuote() {
    $.ajax({
      method: "GET",
      url: "https://api.kanye.rest/",
      success: (response) => {
        this.data.quote = response.quote;
      },
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  }

  getUsers() {
    $.ajax({
      method: "GET",
      url: `https://randomuser.me/api/?results=7`,
      success: this.saveUserInfo,
      error: function (xhr, text, erroe) {
        console.log(text);
      },
    });
  }

  catchAPokemon() {
    const MAX = 799;
    let rand = Math.floor(Math.random() * MAX) + 1;

    $.ajax({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${rand}/`,
      success: (result) => {
        this.data.pokemonCage = {
          name: result.name,
          img: result.sprites.front_shiny,
        };
      },
      error: function (xhr, text, erroe) {
        console.log(text);
      },
    });
  }

  WhoImI() {
    $.ajax({
      method: "GET",
      url: `https://baconipsum.com/api/?type=all-meat`,
      success: (result) => {
        this.data.aboutMe = result[0];
      },
      error: function (xhr, text, erroe) {
        console.log(text);
      },
    });
  }

  init() {
    this.getUsers();
    this.getAQuote();
    this.catchAPokemon();
    this.WhoImI();
  }
}
