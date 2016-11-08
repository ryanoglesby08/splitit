import React from "react";

import createjs from "createjs";

class Receipt extends React.Component {
  componentDidMount() {
    this.stage = new createjs.Stage("receiptCanvas");

    this.drawMoneyElements()
  }

  componentDidUpdate() {
    this.stage.removeAllChildren();

    this.drawMoneyElements();
  }

  drawMoneyElements() {
    const {receipt, wantToAssign} = this.props;

    const polygons = receipt.moneyElements.map((moneyElement) => {
      const graphics = new createjs.Graphics()
        .beginStroke("green")
        .beginFill("rgba(255, 255, 255, 0.01)")
        .moveTo(moneyElement.polygon[0].x, moneyElement.polygon[0].y)
        .lineTo(moneyElement.polygon[1].x, moneyElement.polygon[1].y)
        .lineTo(moneyElement.polygon[2].x, moneyElement.polygon[2].y)
        .lineTo(moneyElement.polygon[3].x, moneyElement.polygon[3].y)
        .closePath();

      const shape = new createjs.Shape(graphics);
      shape.on("click", () => {
        wantToAssign(moneyElement);
      });

      return shape;
    });

    this.stage.addChild(...polygons);
    this.stage.update();
  }

  render() {
    const receipt = this.props.receipt;

    const styles = {
      backgroundImage: `url(${receipt.image})`
    };

    return (
      <canvas id="receiptCanvas" width={294} height={424} style={styles} />
    );
  }
}
Receipt.propTypes = {
  receipt: React.PropTypes.object.isRequired,
  wantToAssign: React.PropTypes.func.isRequired
};

export default Receipt;