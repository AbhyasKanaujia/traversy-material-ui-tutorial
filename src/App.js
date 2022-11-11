import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Save from "@mui/icons-material/Save";
import Delete from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import "@fontsource/roboto";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
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
        <Container maxWidth="md">
          <Typography variant="h2">Welcome to MUI</Typography>
          <Typography variant="subtitle1">
            Learn how to use Material UI
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab
            laudantium consectetur, architecto minus cumque suscipit. Quo labore
            non vel.
          </Typography>
          <TextField
            label="Email"
            placeholder="alex@materialui.com"
            type="email"
          />
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
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Paper style={{ height: 75, width: 50 }} />
            </Grid>
            <Grid item md={6}>
              <Paper style={{ height: 75, width: 50 }} />
            </Grid>
            <Grid item>
              <Paper style={{ height: 75, width: 50 }} />
            </Grid>
            <Grid item>
              <Paper style={{ height: 75, width: 50 }} />
            </Grid>
          </Grid>
        </Container>
      </header>
    </div>
  );
}

export default App;
