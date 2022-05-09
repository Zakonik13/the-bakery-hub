const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { HomePage } = require("../models");
const { CakeImage } = require("../models");
const { Cake } = require("../models");
const { Cupcake } = require("../models");
const { Pie } = require("../models");
const { Schedule } = require("../models");
const { Menu } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find().select("-__v -password");
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).select("-__v -password");
    },
    homePage: async () => {
      return HomePage.findOne();
    },
    cakeImages: async () => {
      return CakeImage.find();
    },
    cake: async () => {
      return Cake.findOne();
    },
    cupcake: async () => {
      return Cupcake.findOne();
    },
    pie: async () => {
      return Pie.findOne();
    },
    schedule: async () => {
      return Schedule.findOne();
    },
    menu: async () => {
      return Menu.findOne();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addHomePage: async (parent, args) => {
      const homePage = await HomePage.create(args);

      return homePage;
    },
    updateHomePage: async (
      parent,
      { _id, hero_image, home_paragraph1, home_paragraph2, home_paragraph3 }
    ) => {
      const old = await HomePage.findOne({ _id });
      {
        hero_image === "" ? (hero = old.hero_image) : (hero = hero_image);
      }
      {
        home_paragraph1 === ""
          ? (para1 = old.home_paragraph1)
          : (para1 = home_paragraph1);
      }
      {
        home_paragraph2 === ""
          ? (para2 = old.home_paragraph2)
          : (para2 = home_paragraph2);
      }
      {
        home_paragraph3 === ""
          ? (para3 = old.home_paragraph3)
          : (para3 = home_paragraph3);
      }

      const homePage = await HomePage.findOneAndUpdate(
        { _id },
        {
          hero_image: hero,
          home_paragraph1: para1,
          home_paragraph2: para2,
          home_paragraph3: para3,
        },
        { new: true }
      );

      console.log(homePage);

      return homePage;
    },
    addCakeImage: async (parent, args) => {
      const cakeImage = await CakeImage.create(args);
      return cakeImage;
    },
    addCake: async (parent, args) => {
      const cake = await Cake.create(args);

      return cake;
    },
    updateCake: async (parent, { _id, link, themes, flavors }) => {
      const old = await Cake.findOne({ _id });
      var newThemeArray;
      var newFlavorArray;

      if (themes === undefined) {
        newThemeArray = old.themes;
      } else {
        newThemeArray = old.themes.concat(themes);
      }

      if (flavors === undefined) {
        newFlavorArray = old.flavors;
      } else {
        newFlavorArray = old.flavors.concat(flavors);
      }

      const updatedCake = await Cake.findOneAndUpdate(
        { _id },
        {
          link: link,
          themes: newThemeArray,
          flavors: newFlavorArray,
        },
        { new: true }
      );

      return updatedCake;
    },
    removeCake: async (parent, { _id, link, themes, flavors }) => {
      const old = await Cake.findOne({ _id });
      var newThemeArray;
      var newFlavorArray;

      if (themes === undefined) {
        newThemeArray = old.themes;
      } else {
        newThemeArray = old.themes.filter((item) => item !== themes[0]);
      }

      if (flavors === undefined) {
        newFlavorArray = old.flavors;
      } else {
        newFlavorArray = old.flavors.filter((item) => item !== flavors[0]);
      }

      const updatedCake = await Cake.findOneAndUpdate(
        { _id },
        {
          link: link,
          themes: newThemeArray,
          flavors: newFlavorArray,
        },
        { new: true }
      );

      return updatedCake;
    },
    addCupcake: async (parent, args) => {
      const cupcake = await Cupcake.create(args);

      return cupcake;
    },
    updateCupcake: async (parent, { _id, link, themes, flavors }) => {
      const old = await Cupcake.findOne({ _id });
      var newThemeArray;
      var newFlavorArray;

      if (themes === undefined) {
        newThemeArray = old.themes;
      } else {
        newThemeArray = old.themes.concat(themes);
      }

      if (flavors === undefined) {
        newFlavorArray = old.flavors;
      } else {
        newFlavorArray = old.flavors.concat(flavors);
      }

      const updatedCupcake = await Cupcake.findOneAndUpdate(
        { _id },
        {
          link: link,
          themes: newThemeArray,
          flavors: newFlavorArray,
        },
        { new: true }
      );

      return updatedCupcake;
    },
    removeCupcake: async (parent, { _id, link, themes, flavors }) => {
      const old = await Cupcake.findOne({ _id });
      var newThemeArray;
      var newFlavorArray;

      if (themes === undefined) {
        newThemeArray = old.themes;
      } else {
        newThemeArray = old.themes.filter((item) => item !== themes[0]);
      }

      if (flavors === undefined) {
        newFlavorArray = old.flavors;
      } else {
        newFlavorArray = old.flavors.filter((item) => item !== flavors[0]);
      }

      const updatedCupcake = await Cupcake.findOneAndUpdate(
        { _id },
        {
          link: link,
          themes: newThemeArray,
          flavors: newFlavorArray,
        },
        { new: true }
      );

      return updatedCupcake;
    },
    addPie: async (parent, args) => {
      const pie = await Pie.create(args);

      return pie;
    },
    updatePie: async (parent, { _id, link, flavors }) => {
      const old = await Pie.findOne({ _id });
      const newArray = old.flavors.concat(flavors);

      const updatedPie = await Pie.findOneAndUpdate(
        { _id },
        {
          link: link,
          flavors: newArray,
        },
        { new: true }
      );

      return updatedPie;
    },
    removePie: async (parent, { _id, link, flavors }) => {
      const old = await Pie.findOne({ _id });
      const newArray = old.flavors.filter((item) => item !== flavors[0]);
      console.log(_id, newArray);

      const updatedPie = await Pie.findOneAndUpdate(
        { _id },
        {
          link: link,
          flavors: newArray,
        },
        { new: true }
      );

      return updatedPie;
    },
    addSchedule: async (parent, args) => {
      const schedule = await Schedule.create(args);

      return schedule;
    },
    updateSchedule: async (
      parent,
      args
      // {
      //   _id,
      //   sundayAM,
      //   sundayPM,
      //   mondayAM,
      //   mondayPM,
      //   tuesdayAM,
      //   tuesdayPM,
      //   wednesdayAM,
      //   wednesdayPM,
      //   thursdayAM,
      //   thursdayPM,
      //   fridayAM,
      //   fridayPM,
      //   saturdayAM,
      //   saturdayPM,
      // }
    ) => {
      const { _id } = args;
      const old = await Schedule.findOne({ _id });
      console.log(old);
      const updatedSchedule = await Schedule.findOneAndUpdate(
        { _id },
        {
          sundayAM: args.sundayAM,
          sundayPM: args.sundayPM,
          mondayAM: args.mondayAM,
          mondayPM: args.mondayPM,
          tuesdayAM: args.tuesdayAM,
          tuesdayPM: args.tuesdayPM,
          wednesdayAM: args.wednesdayAM,
          wednesdayPM: args.wednesdayPM,
          thursdayAM: args.thursdayAM,
          thursdayPM: args.thursdayPM,
          fridayAM: args.fridayAM,
          fridayPM: args.fridayPM,
          saturdayAM: args.saturdayAM,
          saturdayPM: args.saturdayPM,
        },
        { new: true }
      );

      return updatedSchedule;
    },
    addMenu: async (parent, args) => {
      const menu = await Menu.create(args);

      return menu;
    },
    updateMenu: async (
      parent,
      args
      // {
      //   _id,
      //   eightInch,
      //   tenInch,
      //   quarterSheet,
      //   halfSheet,
      //   individualPie,
      //   standardPie,
      //   dozenCupcakes,
      //   dozenCookies,
      //   other,
      //   otherPrice,
      // }
    ) => {
      const { id } = args;
      const old = await Menu.findOne(id);
      const argsArr = Object.entries(args);
      const tempArr = argsArr.filter((item) => item[0] !== "_id");
      const newArr = tempArr.filter((item) => item[1] !== 0);
      const menu = Object.fromEntries(newArr);
      console.log(menu);
      const updatedMenu = await Menu.findOneAndUpdate(
        id,
        menu,
        //   {
        //     eightInch: eightInch,
        //     tenInch: tenInch,
        //     quarterSheet: quarterSheet,
        //     halfSheet: halfSheet,
        //     individualPie: individualPie,
        //     standardPie: standardPie,
        //     dozenCupcakes: dozenCupcakes,
        //     dozenCookies: dozenCookies,
        //     other: other,
        //     otherPrice: otherPrice,
        //   },
        { new: true }
      );

      return updatedMenu;
    },
  },
};

module.exports = resolvers;
