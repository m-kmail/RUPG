class Renderer {
  constructor() {
    this.userSource = $(".userScript").html();
    this.userTemplate = Handlebars.compile(this.userSource);
    this.userContainer = $(".user-container");

    this.quoteSource = $(".quoteScript").html();
    this.quoteTemplate = Handlebars.compile(this.quoteSource);
    this.quoteContainer = $(".quote-container");

    this.pokiSource = $(".pokiScript").html();
    this.pokiTemplate = Handlebars.compile(this.pokiSource);
    this.pokiContainer = $(".pokemon-container");

    this.aboutSource = $(".aboutScript").html();
    this.aboutTemplate = Handlebars.compile(this.aboutSource);
    this.aboutContainer = $(".meat-container");

    this.friendSource = $(".friendScript").html();
    this.friendTemplate = Handlebars.compile(this.friendSource);
    this.friendContainer = $(".friends-container");
  }

  render(data) {
    this.friendContainer.empty();
    this.quoteContainer.empty();
    this.userContainer.empty();
    this.pokiContainer.empty();
    this.aboutContainer.empty();

    this.userRenderer(data);
    this.quoteRenderer(data);
    this.pokiRenderer(data);
    this.aboutRenderer(data);
    this.friendsRenderer(data);
  }

  userRenderer(data) {
    const html = this.userTemplate(data);
    this.userContainer.append(html);
  }

  quoteRenderer(data) {
    data.fav = "Favorite quote:";
    data.writer = "- Kanye";
    const html = this.quoteTemplate(data);
    this.quoteContainer.append(html);
  }

  pokiRenderer(data) {
    data.fav = "Favorite Pokemon: ";
    const html = this.pokiTemplate(data);
    this.pokiContainer.append(html);
  }

  aboutRenderer(data) {
    data.intro = "About Me: ";
    const html = this.aboutTemplate(data);
    this.aboutContainer.append(html);
  }

  friendsRenderer(data) {
    const html = this.friendTemplate({ one: data.friends });
    this.friendContainer.append(html);
  }
}
