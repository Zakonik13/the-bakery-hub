import gql from "graphql-tag";

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

export const ADD_CAKE_IMAGE = gql`
  mutation AddCakeImage($link: String) {
    addCakeImage(link: $String) {
      link
    }
  }
`;

export const ADD_CAKE = gql`
  mutation addCake($link: String, $themes: String, $flavors: String) {
    addCake(link: $link, themes: $themes, flavors: $flavors) {
      link
      themes
      flavors
    }
  }
`;

export const UPDATE_CAKE = gql`
  mutation updateCake(
    $id: ID!
    $link: String
    $themes: [String]
    $flavors: [String]
  ) {
    updateCake(_id: $id, link: $link, themes: $themes, flavors: $flavors) {
      _id
      link
      themes
      flavors
    }
  }
`;

export const REMOVE_CAKE = gql`
  mutation removeCake(
    $id: ID!
    $link: String
    $themes: [String]
    $flavors: [String]
  ) {
    removeCake(_id: $id, link: $link, themes: $themes, flavors: $flavors) {
      _id
      link
      themes
      flavors
    }
  }
`;

export const ADD_CUPCAKE = gql`
  mutation addCupcake($link: String, $themes: String, $flavors: String) {
    addCupcake(link: $link, themes: $themes, flavors: $flavors) {
      link
      themes
      flavors
    }
  }
`;

export const UPDATE_CUPCAKE = gql`
  mutation updateCupcake(
    $id: ID!
    $link: String
    $themes: [String]
    $flavors: [String]
  ) {
    updateCupcake(_id: $id, link: $link, themes: $themes, flavors: $flavors) {
      _id
      link
      themes
      flavors
    }
  }
`;

export const REMOVE_CUPCAKE = gql`
  mutation removeCupcake(
    $id: ID!
    $link: String
    $themes: [String]
    $flavors: [String]
  ) {
    removeCupcake(_id: $id, link: $link, themes: $themes, flavors: $flavors) {
      _id
      link
      themes
      flavors
    }
  }
`;

export const ADD_PIE = gql`
  mutation addPie($link: String, $flavors: String) {
    addPie(link: $link, flavors: $flavors) {
      link
      flavors
    }
  }
`;

export const UPDATE_PIE = gql`
  mutation updatePie($id: ID!, $link: String, $flavors: [String]) {
    updatePie(_id: $id, link: $link, flavors: $flavors) {
      _id
      link
      flavors
    }
  }
`;

export const REMOVE_PIE = gql`
  mutation removePie($id: ID!, $link: String, $flavors: [String]) {
    removePie(_id: $id, link: $link, flavors: $flavors) {
      _id
      link
      flavors
    }
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
    )
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
    )
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
