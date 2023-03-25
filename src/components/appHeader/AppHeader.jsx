// import React from "react";
import "./appHeader.css";
import { Button } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import EntryModel from "./EntryModel";



function AppHeader() {
 
  const [age, setAge] = React.useState("");

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  
  return (
    <div className="app-header">
      <Button
        className="entry-btn"
        style={{
          backgroundColor: "black",
          marginTop: "20px",
          fontSize: "1.3rem",
        }}
        variant="contained"
        onClick={() => setModalOpen(true)}
      >
        <span className="material-symbols-outlined add-icon">note_add</span>ADD
        Entry
      </Button>

      <Box sx={{ maxWidth: 270 }} className="more-option">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">More Options</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Fetch All Revision</MenuItem>
            <MenuItem value={20}>
              Clear All Revision Entries before Today
            </MenuItem>
            <MenuItem value={30}>Clear Today Revision Entry</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <EntryModel modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
