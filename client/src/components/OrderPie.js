import React from "react";
import { Button } from "react-bootstrap";

const OrderPie = () => {
  return (
    <div>
      <form>
        <div>
          <label className="margin-top color" htmlFor="theme">
            Theme:{" "}
          </label>
          <select className="margin-top" name="theme" id="theme">
            <option value="apple">Apple</option>
            <option value="blueberry">Blueberry</option>
            <option value="cherry">Cherry</option>
            <option value="chocolate">Chocolate</option>
            <option value="pecan">Pecan</option>
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
            Add to Cart
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OrderPie;
