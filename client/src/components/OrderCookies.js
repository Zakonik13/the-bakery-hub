import React, { useState } from "react";
import { Button } from "react-bootstrap";
// Components
import CookieSelector from "./CookieSelector";

const OrderCookies = () => {
  return (
    <div>
      <form>
        {/* $8 */}
        <div>
          <label className="margin-top color bold">$8 per dozen </label>
          <br />
          <label className="margin-top color" htmlFor="ChocolateChip">
            - Chocolate Chip:{" "}
          </label>
          <CookieSelector prop={"ChocolateChip"} />
          <br />
          <label className="margin-top color" htmlFor="Oatmeal">
            - Oatmeal:{" "}
          </label>
          <CookieSelector prop={"Oatmeal"} />
          <br />
          <label className="margin-top color" htmlFor="PeanutButter">
            - Peanut Butter:{" "}
          </label>
          <CookieSelector prop={"PeanutButter"} />
          <br />
          <label className="margin-top color" htmlFor="Snickerdoodle">
            - Snickerdoodle:{" "}
          </label>
          <CookieSelector prop={"Snickerdoodle"} />
          <br />
          <label className="margin-top color" htmlFor="Sugar">
            - Sugar:{" "}
          </label>
          <CookieSelector prop={"Sugar"} />
          <br />
        </div>
        {/* $9 */}
        <div>
          <label className="margin-top color bold">$9 per dozen </label>
          <br />
          <label className="margin-top color" htmlFor="PBCC">
            - Peanut Butter Chocolate Chip:{" "}
          </label>
          <CookieSelector prop={"PBCC"} />
          <br />
          <label className="margin-top color" htmlFor="OatmealRaisin">
            - Oatmeal Raisin:{" "}
          </label>
          <CookieSelector prop={"OatmealRaisin"} />
          <br />
          <label className="margin-top color" htmlFor="RockyRoad">
            - Rocky Road:{" "}
          </label>
          <CookieSelector prop={"RockyRoad"} />
          <br />
        </div>
        {/* $10 */}
        <div>
          <label className="margin-top color bold">$10 per dozen </label>
          <br />
          <label className="margin-top color" htmlFor="ChocolateDelight">
            - Chocolate Delights:{" "}
          </label>
          <CookieSelector prop={"ChocolateDelight"} />
          <br />
          <label className="margin-top color" htmlFor="AppleJumbles">
            - Apple Jumbles:{" "}
          </label>
          <CookieSelector prop={"AppleJumbles"} />
          <br />
        </div>
        {/* $12 */}
        <div>
          <label className="margin-top color bold">$12 per dozen </label>
          <br />
          <label className="margin-top color" htmlFor="ChocolateChip">
            - Iced Butter (Circle; no decoration):{" "}
          </label>
          <CookieSelector prop={"ChocolateChip"} />
          <br />
        </div>
        {/* $14 */}
        <div>
          <label className="margin-top color bold">$14 per dozen </label>
          <br />
          <label className="margin-top color" htmlFor="WinterApple">
            - Winter Apple:{" "}
          </label>
          <CookieSelector prop={"WinterApple"} />
          <br />
          <label className="margin-top color" htmlFor="Treasure">
            - Treasure:{" "}
          </label>
          <CookieSelector prop={"Treasure"} />
          <br />
          <label className="margin-top color" htmlFor="Ice">
            - Ice:{" "}
          </label>
          <CookieSelector prop={"Ice"} />
          <br />
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

export default OrderCookies;
