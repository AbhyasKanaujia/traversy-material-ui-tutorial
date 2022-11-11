import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Save from "@mui/icons-material/Save";
import Delete from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

const CheckBoxExample = () => {
  const [checked, setChecked] = useState(true);

  return (
    <FormControlLabel
      control={
        <Checkbox
          ox
          checked={checked}
          icon={<Save />}
          checkedIcon={<Delete />}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      label="Testing Checkbox"
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckBoxExample />
        <ButtonGroup>
          <Button
            startIcon={<Save />}
            onClick={() => alert("Hello")}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
          <Button
            startIcon={<Save />}
            onClick={() => alert("Hello")}
            variant="contained"
            color="secondary"
          >
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
