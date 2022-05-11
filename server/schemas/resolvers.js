const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { HomePage } = require("../models");
const { Cake } = require("../models");
const { Cookie } = require("../models");
const { Cupcake } = require("../models");
const { Pie } = require("../models");
const { Extra } = require("../models");
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
    cake: async () => {
      return Cake.findOne();
    },
    cookie: async () => {
      return Cookie.findOne();
    },
    cupcake: async () => {
      return Cupcake.findOne();
    },
    pie: async () => {
      return Pie.findOne();
    },
    extras: async () => {
      return Extra.find();
    },
    extra: async (parent, { _id }) => {
      return Extra.findOne({ _id });
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
    addCake: async (parent, args) => {
      const cake = await Cake.create(args);

      return cake;
    },
    updateCake: async (parent, { _id, links, themes, flavors }) => {
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
          links: links,
          themes: newThemeArray,
          flavors: newFlavorArray,
        },
        { new: true }
      );

      return updatedCake;
    },
    removeCake: async (parent, { _id, links, themes, flavors }) => {
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
          links: links,
          themes: newThemeArray,
          flavors: newFlavorArray,
        },
        { new: true }
      );

      return updatedCake;
    },
    addCookie: async (parent, args) => {
      const cookie = await Cookie.create(args);

      return cookie;
    },
    updateCookie: async (parent, { _id, links, flavors }) => {
      const old = await Cookie.findOne({ _id });
      const newArray = old.flavors.concat(flavors);

      const updatedCookie = await Cookie.findOneAndUpdate(
        { _id },
        {
          links: links,
          flavors: newArray,
        },
        { new: true }
      );

      return updatedCookie;
    },
    removeCookie: async (parent, { _id, links, flavors }) => {
      const old = await Cookie.findOne({ _id });
      const newArray = old.flavors.filter((item) => item !== flavors[0]);
      console.log(_id, newArray);

      const updatedCookie = await Cookie.findOneAndUpdate(
        { _id },
        {
          links: links,
          flavors: newArray,
        },
        { new: true }
      );

      return updatedCookie;
    },
    addCupcake: async (parent, args) => {
      const cupcake = await Cupcake.create(args);

      return cupcake;
    },
    updateCupcake: async (parent, { _id, links, themes, flavors }) => {
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
          links: links,
          themes: newThemeArray,
          flavors: newFlavorArray,
        },
        { new: true }
      );

      return updatedCupcake;
    },
    removeCupcake: async (parent, { _id, links, themes, flavors }) => {
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
          links: links,
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
    updatePie: async (parent, { _id, links, flavors }) => {
      const old = await Pie.findOne({ _id });
      const newArray = old.flavors.concat(flavors);

      const updatedPie = await Pie.findOneAndUpdate(
        { _id },
        {
          links: links,
          flavors: newArray,
        },
        { new: true }
      );

      return updatedPie;
    },
    removePie: async (parent, { _id, links, flavors }) => {
      const old = await Pie.findOne({ _id });
      const newArray = old.flavors.filter((item) => item !== flavors[0]);
      console.log(_id, newArray);

      const updatedPie = await Pie.findOneAndUpdate(
        { _id },
        {
          links: links,
          flavors: newArray,
        },
        { new: true }
      );

      return updatedPie;
    },
    addExtra: async (parent, args) => {
      const extra = await Extra.create(args);

      return extra;
    },
    updateExtra: async (parent, args) => {
      const updatedExtra = await Extra.findOneAndUpdate(
        { _id },
        { args },
        { new: true }
      );

      return updatedExtra;
    },
    removeExtra: async (parent, { _id }) => {
      await Extra.findOneAndDelete({ _id });
    },
    addSchedule: async (parent, args) => {
      const schedule = await Schedule.create(args);

      return schedule;
    },
    updateSchedule: async (parent, args) => {
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
    updateMenu: async (parent, args) => {
      const { id } = args;
      const old = await Menu.findOne(id);
      const argsArr = Object.entries(args);
      const tempArr = argsArr.filter((item) => item[0] !== "_id");
      const newArr = tempArr.filter((item) => item[1] !== 0);
      const menu = Object.fromEntries(newArr);
      console.log(menu);
      const updatedMenu = await Menu.findOneAndUpdate(id, menu, { new: true });

      return updatedMenu;
    },
  },
};

module.exports = resolvers;
