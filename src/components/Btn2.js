import React from "react";
import { Button, Icon } from "semantic-ui-react";

const Btn2 = (props) => {
  const handleClick = () => {
    props.onClickHandler(props.increment);
  };

  return (
    <Button
      animated="fade"
      deverted
      color={props.color}
      onClick={handleClick}
      className="huge ui button"
    >
      <Icon name="minus"></Icon>
    </Button>
  );
};

export default Btn2;
