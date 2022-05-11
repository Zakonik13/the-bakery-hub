const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    users: [User]
    user(email: String!): User
    homePage: HomePage
    cake: Cake
    cookie: Cookie
    cupcake: Cupcake
    pie: Pie
    extras: [Extra]
    extra(_id: ID!): Extra
    schedule: Schedule
    menu: Menu
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID
    email: String
  }

  type HomePage {
    _id: ID
    hero_image: String
    home_paragraph1: String
    home_paragraph2: String
    home_paragraph3: String
  }

  type Cake {
    _id: ID
    links: [String]
    themes: [String]
    flavors: [String]
  }

  type Cookie {
    _id: ID
    links: [String]
    flavors: [String]
  }

  type Cupcake {
    _id: ID
    links: [String]
    themes: [String]
    flavors: [String]
  }

  type Pie {
    _id: ID
    links: [String]
    flavors: [String]
  }

  type Extra {
    _id: ID
    product: String
    link: String
    flavor: String
    theme: String
    qty: String
    price: Int
  }

  type Schedule {
    _id: ID
    sundayAM: String
    sundayPM: String
    mondayAM: String
    mondayPM: String
    tuesdayAM: String
    tuesdayPM: String
    wednesdayAM: String
    wednesdayPM: String
    thursdayAM: String
    thursdayPM: String
    fridayAM: String
    fridayPM: String
    saturdayAM: String
    saturdayPM: String
  }

  type Menu {
    _id: ID
    eightInch: Int
    tenInch: Int
    quarterSheet: Int
    halfSheet: Int
    individualPie: Int
    standardPie: Int
    dozenCupcakes: Int
    dozenCookies: Int
    other: [String]
    otherPrice: [String]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    addHomePage(
      hero_image: String
      home_paragraph1: String
      home_paragraph2: String
      home_paragraph3: String
    ): HomePage
    updateHomePage(
      _id: ID!
      hero_image: String
      home_paragraph1: String
      home_paragraph2: String
      home_paragraph3: String
    ): HomePage
    addCake(links: [String], themes: [String], flavors: [String]): Cake
    updateCake(
      _id: ID!
      links: [String]
      themes: [String]
      flavors: [String]
    ): Cake
    removeCake(
      _id: ID!
      links: [String]
      themes: [String]
      flavors: [String]
    ): Cake
    addCookie(links: [String], flavors: [String]): Cookie
    updateCookie(_id: ID!, links: [String], flavors: [String]): Cookie
    removeCookie(_id: ID!, links: [String], flavors: [String]): Cookie
    addCupcake(links: [String], themes: [String], flavors: [String]): Cupcake
    updateCupcake(
      _id: ID!
      links: [String]
      themes: [String]
      flavors: [String]
    ): Cupcake
    removeCupcake(
      _id: ID!
      links: [String]
      themes: [String]
      flavors: [String]
    ): Cupcake
    addPie(links: [String], flavors: [String]): Pie
    updatePie(_id: ID!, links: [String], flavors: [String]): Pie
    removePie(_id: ID!, links: [String], flavors: [String]): Pie
    addExtra(
      product: String
      link: String
      flavor: String
      theme: String
      qty: String
      price: Int
    ): Extra
    updateExtra(
      _id: ID!
      product: String
      link: String
      flavor: String
      theme: String
      qty: String
      price: Int
    ): Extra
    removeExtra(
      _id: ID!
      product: String
      link: String
      flavor: String
      theme: String
      qty: String
      price: Int
    ): Extra
    addSchedule(
      sundayAM: String
      sundayPM: String
      mondayAM: String
      mondayPM: String
      tuesdayAM: String
      tuesdayPM: String
      wednesdayAM: String
      wednesdayPM: String
      thursdayAM: String
      thursdayPM: String
      fridayAM: String
      fridayPM: String
      saturdayAM: String
      saturdayPM: String
    ): Schedule
    updateSchedule(
      _id: ID!
      sundayAM: String
      sundayPM: String
      mondayAM: String
      mondayPM: String
      tuesdayAM: String
      tuesdayPM: String
      wednesdayAM: String
      wednesdayPM: String
      thursdayAM: String
      thursdayPM: String
      fridayAM: String
      fridayPM: String
      saturdayAM: String
      saturdayPM: String
    ): Schedule
    addMenu(
      eightInch: Int
      tenInch: Int
      quarterSheet: Int
      halfSheet: Int
      individualPie: Int
      standardPie: Int
      dozenCupcakes: Int
      dozenCookies: Int
      other: [String]
      otherPrice: [String]
    ): Menu
    updateMenu(
      _id: ID!
      eightInch: Int
      tenInch: Int
      quarterSheet: Int
      halfSheet: Int
      individualPie: Int
      standardPie: Int
      dozenCupcakes: Int
      dozenCookies: Int
      other: [String]
      otherPrice: [String]
    ): Menu
  }
`;

module.exports = typeDefs;
