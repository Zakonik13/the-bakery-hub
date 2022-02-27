import React from "react";
import { Button } from "react-bootstrap";
import "./order-form.css";

const OrderBrownies = () => {
  return (
    <div>
      <form>
        <div>
          <label className="margin-top color" htmlFor="theme">
            Theme:{" "}
          </label>
          <select className="margin-top" name="theme" id="theme">
            <option value="bday">Birthday</option>
            <option value="wedding">Wedding</option>
            <option value="velvet">Red Velvet</option>
            <option value="carrot">Carrot Cake</option>
          </select>
        </div>
        {/* Select a size */}
        <div className="margin-top twenty">
          <label>Select a size: </label>
          <input type="radio" name="size" id="8" className="radiospace" />{" "}
          <label htmlFor="8">8"</label>
          <input type="radio" name="size" id="10" className="radiospace" />{" "}
          <label htmlFor="10">10"</label>
          <input type="radio" name="size" id="12" className="radiospace" />{" "}
          <label htmlFor="12">12"</label>
        </div>
        {/* How many tiers */}
        <div className="margin-top twenty">
          <label>How many tiers: </label>
          <input type="radio" name="tier" id="1" className="radiospace" />{" "}
          <label htmlFor="1">1</label>
          <input type="radio" name="tier" id="2" className="radiospace" />{" "}
          <label htmlFor="2">2</label>
          <input type="radio" name="tier" id="3" className="radiospace" />{" "}
          <label htmlFor="3">3</label>
        </div>
        {/* Icing */}
        <div className="margin-top three">
          <label className="float-left">Icing:</label>
          {/* Type */}
          <div className="float-right">
            <label>Type: </label>
            <input type="radio" name="icing" id="b" className="type" />{" "}
            <label htmlFor="b">Buttercream</label>
            <input type="radio" name="icing" id="c" className="type" />{" "}
            <label htmlFor="c">Cream Cheese</label>
            <input type="radio" name="icing" id="f" className="type" />{" "}
            <label htmlFor="f">Fondant</label>
          </div>
          <br />
          {/* Color */}
          <label className="margin-top float-left" htmlFor="color">
            Color:{" "}
          </label>
          <div className="float-right">
            <label className="margin-top color" htmlFor="color">
              Main:
            </label>
            <select className="margin-top color" name="color" id="color">
              <option value="white">White</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="pink">Pink</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="gray">Gray</option>
            </select>
            <label className="margin-top color" htmlFor="color">
              Secondary:
            </label>
            <select className="margin-top" name="color" id="color">
              <option value="white">White</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="pink">Pink</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="gray">Gray</option>
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
          ></textarea>
        </div>
        {/* User Info */}
        <div className="margin-top four">
          <div className="margin-top twenty">
            <label className="name float-left" htmlFor="name">
              Name:
            </label>
            <input className="float-right" type="text" id="name" />
          </div>
          <div className="margin-top twenty">
            <label className="float-left" htmlFor="email">
              Email:
            </label>
            <input className="float-right" type="text" id="email" />
          </div>
          <div className="margin-top twenty">
            <label className="float-left" htmlFor="phone">
              Phone:
            </label>
            <input className="float-right" type="text" id="phone" />
          </div>
        </div>
        <div className="button">
          <Button style={{ backgroundColor: "#b33e3e", border: "none" }}>
            Complete Order
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OrderBrownies;
