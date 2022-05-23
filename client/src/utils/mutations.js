import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_HOMEPAGE = gql`
  mutation addHomePage(
    $hero_image: String
    $home_paragraph1: String
    $home_paragraph2: String
    $home_paragraph3: String
  ) {
    addHomePage(
      hero_image: $hero_image
      home_paragraph1: $home_paragraph1
      home_paragraph2: $home_paragraph2
      home_paragraph3: $home_paragraph3
    ) {
      hero_image
      home_paragraph1
      home_paragraph2
      home_paragraph3
    }
  }
`;

export const UPDATE_HOMEPAGE = gql`
  mutation updateHomePage(
    $id: ID!
    $hero_image: String
    $home_paragraph1: String
    $home_paragraph2: String
    $home_paragraph3: String
  ) {
    updateHomePage(
      _id: $id
      hero_image: $hero_image
      home_paragraph1: $home_paragraph1
      home_paragraph2: $home_paragraph2
      home_paragraph3: $home_paragraph3
    ) {
      _id
      hero_image
      home_paragraph1
      home_paragraph2
      home_paragraph3
    }
  }
`;

export const ADD_CAKE = gql`
  mutation addCake($links: [String], $themes: [String], $flavors: [String]) {
    addCake(links: $links, themes: $themes, flavors: $flavors) {
      links
      themes
      flavors
    }
  }
`;

export const UPDATE_CAKE = gql`
  mutation updateCake(
    $id: ID!
    $links: [String]
    $themes: [String]
    $flavors: [String]
  ) {
    updateCake(_id: $id, links: $links, themes: $themes, flavors: $flavors) {
      _id
      links
      themes
      flavors
    }
  }
`;

export const REMOVE_CAKE = gql`
  mutation removeCake(
    $id: ID!
    $links: [String]
    $themes: [String]
    $flavors: [String]
  ) {
    removeCake(_id: $id, links: $links, themes: $themes, flavors: $flavors) {
      _id
      links
      themes
      flavors
    }
  }
`;

export const ADD_COOKIE = gql`
  mutation addCookie($links: [String], $flavors: [String]) {
    addCookie(links: $links, flavors: $flavors) {
      links
      flavors
    }
  }
`;

export const UPDATE_COOKIE = gql`
  mutation updateCookie($id: ID!, $links: [String], $flavors: [String]) {
    updateCookie(_id: $id, links: $links, flavors: $flavors) {
      _id
      links
      flavors
    }
  }
`;

export const REMOVE_COOKIE = gql`
  mutation removeCookie($id: ID!, $links: [String], $flavors: [String]) {
    removeCookie(_id: $id, links: $links, flavors: $flavors) {
      _id
      links
      flavors
    }
  }
`;

export const ADD_CUPCAKE = gql`
  mutation addCupcake($links: [String], $themes: [String], $flavors: [String]) {
    addCupcake(links: $links, themes: $themes, flavors: $flavors) {
      links
      themes
      flavors
    }
  }
`;

export const UPDATE_CUPCAKE = gql`
  mutation updateCupcake(
    $id: ID!
    $links: [String]
    $themes: [String]
    $flavors: [String]
  ) {
    updateCupcake(_id: $id, links: $links, themes: $themes, flavors: $flavors) {
      _id
      links
      themes
      flavors
    }
  }
`;

export const REMOVE_CUPCAKE = gql`
  mutation removeCupcake(
    $id: ID!
    $links: [String]
    $themes: [String]
    $flavors: [String]
  ) {
    removeCupcake(_id: $id, links: $links, themes: $themes, flavors: $flavors) {
      _id
      links
      themes
      flavors
    }
  }
`;

export const ADD_PIE = gql`
  mutation addPie($links: [String], $flavors: [String]) {
    addPie(links: $links, flavors: $flavors) {
      links
      flavors
    }
  }
`;

export const UPDATE_PIE = gql`
  mutation updatePie($id: ID!, $links: [String], $flavors: [String]) {
    updatePie(_id: $id, links: $links, flavors: $flavors) {
      _id
      links
      flavors
    }
  }
`;

export const REMOVE_PIE = gql`
  mutation removePie($id: ID!, $links: [String], $flavors: [String]) {
    removePie(_id: $id, links: $links, flavors: $flavors) {
      _id
      links
      flavors
    }
  }
`;

export const ADD_EXTRA = gql`
  mutation addExtra(
    $id: ID!
    $product: String
    $link: String
    $flavor: String
    $theme: String
    $qty: String
    $price: Int
  ) {
    addExtra(
      _id: $id
      product: $product
      link: $link
      flavor: $flavor
      theme: $theme
      qty: $qty
      price: $price
    ) {
      _id
      product
      link
      flavor
      theme
      qty
      price
    }
  }
`;

export const UPDATE_EXTRA = gql`
  mutation updateExtra(
    $id: ID!
    $product: String
    $link: String
    $flavor: String
    $theme: String
    $qty: String
    $price: Int
  ) {
    updateExtra(
      _id: $id
      product: $product
      link: $link
      flavor: $flavor
      theme: $theme
      qty: $qty
      price: $price
    ) {
      _id
      product
      link
      flavor
      theme
      qty
      price
    }
  }
`;

export const REMOVE_EXTRA = gql`
  mutation removeExtra($id: ID!) {
    removeExtra(_id: $id)
  }
`;

export const ADD_SCHEDULE = gql`
  mutation addSchedule(
    $sundayAM: String
    $sundayPM: String
    $mondayAM: String
    $mondayPM: String
    $tuesdayAM: String
    $tuesdayPM: String
    $wednesdayAM: String
    $wednesdayPM: String
    $thursdayAM: String
    $thursdayPM: String
    $fridayAM: String
    $fridayPM: String
    $saturdayAM: String
    $saturdayPM: String
  ) {
    addSchedule(
      sundayAM: $sundayAM
      sundayPM: $sundayPM
      mondayAM: $mondayAM
      mondayPM: $mondayPM
      tuesdayAM: $tuesdayAM
      tuesdayPM: $tuesdayPM
      wednesdayAM: $wednesdayAM
      wednesdayPM: $wednesdayPM
      thursdayAM: $thursdayAM
      thursdayPM: $thursdayPM
      fridayAM: $fridayAM
      fridayPM: $fridayPM
      saturdayAM: $saturdayAM
      saturdayPM: $saturdayPM
    ) {
      _id
      sundayAM
      sundayPM
      mondayAM
      mondayPM
      tuesdayAM
      tuesdayPM
      wednesdayAM
      wednesdayPM
      thursdayAM
      thursdayPM
      fridayAM
      fridayPM
      saturdayAM
      saturdayPM
    }
  }
`;

export const UPDATE_SCHEDULE = gql`
  mutation updateSchedule(
    $id: ID!
    $sundayAM: String
    $sundayPM: String
    $mondayAM: String
    $mondayPM: String
    $tuesdayAM: String
    $tuesdayPM: String
    $wednesdayAM: String
    $wednesdayPM: String
    $thursdayAM: String
    $thursdayPM: String
    $fridayAM: String
    $fridayPM: String
    $saturdayAM: String
    $saturdayPM: String
  ) {
    updateSchedule(
      _id: $id
      sundayAM: $sundayAM
      sundayPM: $sundayPM
      mondayAM: $mondayAM
      mondayPM: $mondayPM
      tuesdayAM: $tuesdayAM
      tuesdayPM: $tuesdayPM
      wednesdayAM: $wednesdayAM
      wednesdayPM: $wednesdayPM
      thursdayAM: $thursdayAM
      thursdayPM: $thursdayPM
      fridayAM: $fridayAM
      fridayPM: $fridayPM
      saturdayAM: $saturdayAM
      saturdayPM: $saturdayPM
    ) {
      _id
      sundayAM
      sundayPM
      mondayAM
      mondayPM
      tuesdayAM
      tuesdayPM
      wednesdayAM
      wednesdayPM
      thursdayAM
      thursdayPM
      fridayAM
      fridayPM
      saturdayAM
      saturdayPM
    }
  }
`;

export const ADD_MENU = gql`
  mutation addMenu(
    $eightInch: Int
    $tenInch: Int
    $quarterSheet: Int
    $halfSheet: Int
    $individualPie: Int
    $standardPie: Int
    $dozenCupcakes: Int
    $dozenCookies: Int
    $other: [String]
    $otherPrice: [String]
  ) {
    addMenu(
      eightInch: $eightInch
      tenInch: $tenInch
      quarterSheet: $quarterSheet
      halfSheet: $halfSheet
      individualPie: $individualPie
      standardPie: $standardPie
      dozenCupcakes: $dozenCupcakes
      dozenCookies: $dozenCookies
      other: $other
      otherPrice: $otherPrice
    ) {
      _id
      eightInch
      tenInch
      quarterSheet
      halfSheet
      individualPie
      standardPie
      dozenCupcakes
      dozenCookies
      other
      otherPrice
    }
  }
`;

export const UPDATE_MENU = gql`
  mutation updateMenu(
    $id: ID!
    $eightInch: Int
    $tenInch: Int
    $quarterSheet: Int
    $halfSheet: Int
    $individualPie: Int
    $standardPie: Int
    $dozenCupcakes: Int
    $dozenCookies: Int
    $other: [String]
    $otherPrice: [String]
  ) {
    updateMenu(
      _id: $id
      eightInch: $eightInch
      tenInch: $tenInch
      quarterSheet: $quarterSheet
      halfSheet: $halfSheet
      individualPie: $individualPie
      standardPie: $standardPie
      dozenCupcakes: $dozenCupcakes
      dozenCookies: $dozenCookies
      other: $other
      otherPrice: $otherPrice
    ) {
      _id
      eightInch
      tenInch
      quarterSheet
      halfSheet
      individualPie
      standardPie
      dozenCupcakes
      dozenCookies
      other
      otherPrice
    }
  }
`;
