import React from "react";

import createjs from "createjs";

class Receipt extends React.Component {
  componentDidMount() {
    const {receipt, wantToAssign} = this.props;

    const stage = new createjs.Stage("receiptCanvas");

    const polygons = receipt.moneyElements.map(({text, polygon}) => {
      const graphics = new createjs.Graphics()
        .beginStroke("green")
        .beginFill("rgba(255, 255, 255, 0.01)")
        .moveTo(polygon[0].x, polygon[0].y)
        .lineTo(polygon[1].x, polygon[1].y)
        .lineTo(polygon[2].x, polygon[2].y)
        .lineTo(polygon[3].x, polygon[3].y)
        .closePath();

      const shape = new createjs.Shape(graphics);
      shape.on("click", () => {
        wantToAssign(text);
      });

      return shape;
    });

    stage.addChild(...polygons);
    stage.update();
  }

  render() {
    return (
      <div>
        <img className="receipt" src="images/receipt.jpg"/>
        <canvas className="receipt-elements" id="receiptCanvas" width={294} height={424} />
      </div>
    );
  }
}
Receipt.propTypes = {
  receipt: React.PropTypes.object.isRequired,
  wantToAssign: React.PropTypes.func.isRequired
};

export default Receipt;