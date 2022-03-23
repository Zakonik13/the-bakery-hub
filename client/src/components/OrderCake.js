import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { UPDATE_CART } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";

const OrderCake = () => {
  const [state, dispatch] = useStoreContext();
  const { cart } = state;
  const [formState, setFormState] = useState({
    product: "cake",
    theme: "birthday",
    size: "",
    tier: "",
    icing: "",
    flavor: "",
    text: "",
    name: "",
    email: "",
    phone: "",
  });

  console.log(state);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleForm = (event) => {
    event.preventDefault();
    console.log(formState);
    dispatch({
      type: UPDATE_CART,
      cart: formState,
    });
  };

  return (
    <div>
      <form>
        <div>
          <label className="margin-top color" htmlFor="theme">
            Theme:{" "}
          </label>
          <select
            className="margin-top"
            name="theme"
            id="theme"
            onChange={handleChange}
          >
            <option value="birthday">Birthday</option>
            <option value="sweet16">Sweet 16</option>
            <option value="oneMonth">One Month Anniversary</option>
            <option value="bridal">Bridal Shower</option>
            <option value="groomsmen">Groomsmen Cake</option>
            <option value="wedding">Wedding</option>
            <option value="anniversary">Anniversary</option>
            <option value="baby">Baby Shower</option>
            <option value="work">Work Party</option>
            <option value="holidays" disabled>
              -- Holidays --
            </option>
            <option value="newYear">New Year's</option>
            <option value="valentine">Valentine's Day</option>
            <option value="stPatrick">St. Patrick's Day</option>
            <option value="easter">Easter</option>
            <option value="aprilFools">April Fool's Day</option>
            <option value="mothers">Mother's Day</option>
            <option value="fathers">Father's Day</option>
            <option value="memorial">Memorial Day</option>
            <option value="labor">Labor Day</option>
            <option value="wedding">Wedding</option>
            <option value="veterans">Veteran's Day</option>
            <option value="4th">4th of July</option>
            <option value="halloween">Halloween</option>
            <option value="thanksgiving">Thanksgiving</option>
            <option value="christmas">Christmas</option>
          </select>
        </div>
        {/* Select a size */}
        <div className="margin-top twenty">
          <label>Select a size: </label>
          <input
            type="radio"
            value="8"
            name="size"
            id="8"
            className="radiospace"
            onChange={handleChange}
          />{" "}
          <label htmlFor="8">8"</label>
          <input
            type="radio"
            value="10"
            name="size"
            id="10"
            className="radiospace"
            onChange={handleChange}
          />{" "}
          <label htmlFor="10">10"</label>
          {/* <input type="radio" name="size" id="12" className="radiospace" />{" "}
          <label htmlFor="12">12"</label> */}
        </div>
        {/* How many tiers */}
        <div className="margin-top twenty">
          <label>How many tiers: </label>
          <input
            type="radio"
            value="1"
            name="tier"
            id="1"
            className="radiospace"
            onChange={handleChange}
          />{" "}
          <label htmlFor="1">1</label>
          <input
            type="radio"
            value="2"
            name="tier"
            id="2"
            className="radiospace"
            onChange={handleChange}
          />{" "}
          <label htmlFor="2">2</label>
          <input
            type="radio"
            value="3"
            name="tier"
            id="3"
            className="radiospace"
            onChange={handleChange}
          />{" "}
          <label htmlFor="3">3</label>
        </div>
        {/* Icing */}
        <div className="margin-top three">
          <label className="float-left">Icing:</label>
          {/* Type */}
          <div className="float-right">
            <input
              type="radio"
              value="traditional"
              name="icing"
              id="b"
              className="type"
              onChange={handleChange}
            />
            <label htmlFor="b">Traditional</label>
            <input
              type="radio"
              value="buttercream"
              name="icing"
              id="c"
              className="type"
              onChange={handleChange}
            />
            <label htmlFor="c">Buttercream</label>
            <input
              type="radio"
              value="creamcheese"
              name="icing"
              id="f"
              className="type"
              onChange={handleChange}
            />
            <label htmlFor="f">Cream Cheese</label>
          </div>
          <br />
          {/* Color */}
          <label className="margin-top float-left" htmlFor="color">
            Flavor:{" "}
          </label>
          <div className="float-right">
            <select
              className="margin-top color"
              name="flavor"
              id="flavor"
              onChange={handleChange}
            >
              <option value="caramelApple">Caramel Apple</option>
              <option value="carrot">Carrot</option>
              <option value="chocolate">Chocolate</option>
              <option value="chocolateChip">Chocolate Chip</option>
              <option value="citrus">Citrus Cake</option>
              <option value="coconut">Coconut</option>
              <option value="funfetti">Funfetti</option>
              <option value="lemon">Lemon</option>
              <option value="lemonRasp">Lemon Raspberry</option>
              <option value="oreo">Oreo</option>
              <option value="redVelvet">Red Velvet</option>
              <option value="spice">Spice</option>
              <option value="white">White</option>
              <option value="yellow">Yellow</option>
            </select>
          </div>
        </div>
        {/* Special Request */}
        <div className="margin-top four">
          <label className="float-left" htmlFor="text">
            Special Request:{" "}
          </label>
          <textarea
            className="float-right"
            placeholder="Detailed instructions"
            name="text"
            id="text"
            cols="40"
            rows="7"
            onChange={handleChange}
          ></textarea>
        </div>
        {/* User Info */}
        <div className="margin-top four">
          <div className="margin-top twenty">
            <label className="name float-left" htmlFor="name">
              Name:
            </label>
            <input
              className="float-right"
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className="margin-top twenty">
            <label className="float-left" htmlFor="email">
              Email:
            </label>
            <input
              className="float-right"
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="margin-top twenty">
            <label className="float-left" htmlFor="phone">
              Phone:
            </label>
            <input
              className="float-right"
              type="text"
              name="phone"
              id="phone"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="button">
          <Button
            onClick={handleForm}
            type="submit"
            style={{ backgroundColor: "#b33e3e", border: "none" }}
          >
            Add to Cart
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OrderCake;
