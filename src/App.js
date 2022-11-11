import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Save from "@mui/icons-material/Save";
import Delete from "@mui/icons-material/Delete";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
