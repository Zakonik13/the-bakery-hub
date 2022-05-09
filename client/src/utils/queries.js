import gql from "graphql-tag";

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      email
    }
  }
`;

export const GET_HOMEPAGE = gql`
  query HomePage {
    homePage {
      _id
      hero_image
      home_paragraph1
      home_paragraph2
      home_paragraph3
    }
  }
`;

export const GET_CAKE_IMAGE = gql`
  query CakeImages {
    cakeImages {
      link
    }
  }
`;

export const GET_PIE = gql`
  query Pie {
    pie {
      _id
      link
      flavors
    }
  }
`;

export const GET_CAKE = gql`
  query Cake {
    cake {
      _id
      link
      themes
      flavors
    }
  }
`;

export const GET_CUPCAKE = gql`
  query Cupcake {
    cupcake {
      _id
      link
      themes
      flavors
    }
  }
`;

export const GET_SCHEDULE = gql`
  query Schedule {
    schedule {
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

export const GET_MENU = gql`
  query Menu {
    menu {
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
