import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Paper, Stack, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material-next/Button";
import SendIcon from '@mui/icons-material/Send';
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    '@global': {
        body: {
            backgroundColor: 'brown', 
        }
    },
  box: {
    position: "relative",
  },
  contentTitle: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
  },
  select: {
    height: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: 15,
  },
  button: {
    position: "relative",
    left: "40%",
  },
});

export default function CreatePost() {
  let classes = useStyle();
  let [model, setModel] = useState("");
  let [price, setPrice] = useState();
  let [mileage, setMileage] = useState("");
  let [horsepower, setHorsepower] = useState("");
  let [color, setColor] = useState("");
  const currencies = [
    {
      value: "AMD",
      label: "ЦЏ",
    },
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "в‚¬",
    },
  ];

  return (
    <div className={classes.box}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: 'center',
          "& > :not(style)": {
            m: 1,
            minWidth: 400,
            height: 'auto'
          },
        }}
      >
        <Paper elevation={3}>
          <h2 className={classes.contentTitle}> Create Post </h2>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "20ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Model"
                value={model}
                onChange={(e) => {
                  setModel(e.target.value);
                }}
              />
              <TextField
                label="Color"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </div>

            <div>
              <TextField
                label="Price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue="USD"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <TextField
                label="Mileage"
                value={mileage}
                onChange={(e) => {
                  setMileage(e.target.value);
                }}
              />
              <TextField
                label="Horsepower"
                value={horsepower}
                onChange={(e) => {
                  setHorsepower(e.target.value);
                }}
              />
            </div>
            <div className={classes.select}>
              <label>
                Body Style:
                <select>
                  <option>  </option>
                  <option> SEDAN </option>
                  <option> COUPE </option>
                  <option> SPORTS CAR </option>
                  <option> STATION WAGON </option>
                  <option> HATCHBACK </option>
                  <option> CONVERTIBLE </option>
                  <option> SPORT-UTILITY VEHICLE (SUV) </option>
                  <option> MINIVAN </option>
                  <option> PICKUP TRUCK </option>
                </select>
              </label>
              <label>
                Gearbox:
                <select>
                  <option> Automatic </option>
                  <option> Manual </option>
                </select>
              </label>
              <label>
                Hand Drive:
                <select>
                  <option> Left </option>
                  <option> Right</option>
                </select>
              </label>
              <label>
                Engine:
                <select>
                  <option> Diesel </option>
                  <option> Petrol </option>
                  <option> Electric </option>
                  <option> Hybrid </option>
                  <option> Gas </option>
                </select>
              </label>
            </div>
            <Box
              sx={{ "& .MuiTextField-root": { m: 1, width: 450 },}}
            >
              <div>
                <TextField id="fullWidth" label="Additional" multiline />
              </div>
            </Box>
            <Stack direction="row" spacing={2}>
              <Button className={classes.button} variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Box>
    </div>
  );
} 