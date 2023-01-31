import React, { useState } from "react";
import Btn from "./components/Btn.js";
import Btn2 from "./components/Btn2.js";
import "semantic-ui-css/semantic.min.css";
import { GridRow, Grid, GridColumn } from "semantic-ui-react";

function App() {
  const [count, setCount] = useState(1);
  const incrementCount = (incrementAmount) => {
    if (count > 0) {
      setCount(count + incrementAmount);
    } else {
      setCount(count - count);
    }
  };

  return (
    <Grid style={{ justifyContent: "center", marginTop: 60 }}>
      <GridColumn>
        <h1 style={{ marginLeft: -90, fontSize: 40 }}>CounterApp</h1>
        <h2 style={{ fontSize: 30 }}>{count}</h2>
      </GridColumn>
      <GridRow>
        <GridColumn>
          <Btn
            increment={1}
            color="green"
            onClickHandler={incrementCount}
          ></Btn>
          <h3>INCR</h3>
        </GridColumn>
        <GridColumn>
          <Btn2
            increment={-1}
            color="red"
            onClickHandler={incrementCount}
          ></Btn2>
          <h3>DECR</h3>
        </GridColumn>
      </GridRow>
      <div>
        <br></br>
        <h2>
          <i>Done by Ankit Sharma, Reg no: 12016468</i>
        </h2>
      </div>
    </Grid>
  );
}

export default App;
