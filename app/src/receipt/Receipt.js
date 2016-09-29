/* global createjs */

import React from "react";

class Receipt extends React.Component {
  componentDidMount() {
    const stage = new createjs.Stage("receiptCanvas");

    const polygons = this.props.receipt.moneyElements.map(({text, polygon}) => {
      const graphics = new createjs.Graphics()
        .beginStroke("green")
        .beginFill("green")
        .moveTo(polygon[0].x, polygon[0].y)
        .lineTo(polygon[1].x, polygon[1].y)
        .lineTo(polygon[2].x, polygon[2].y)
        .lineTo(polygon[3].x, polygon[3].y)
        .closePath();

      const shape = new createjs.Shape(graphics);
      shape.on("click", () => {
        console.log(`You clicked on ${text}`);
      });

      return shape;
    });

    stage.addChild(...polygons);
    stage.update();
  }

  render() {
    return (
      <div>
        <img src="images/receipt.jpg"/>
        <canvas className="receipt-elements" id="receiptCanvas" width={294} height={424} />
      </div>
    );
  }
}
Receipt.propTypes = {
  receipt: React.PropTypes.object.isRequired
};

export default Receipt;