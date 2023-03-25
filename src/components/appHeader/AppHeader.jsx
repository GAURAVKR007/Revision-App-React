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

import Verify from "./Verify";

function AppHeader() {
    

  const [age, setAge] = React.useState("");

  const [modalOpen, setModalOpen] = React.useState(false);

  const [verifyModal,setVerifyModal] = React.useState([false,0]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="app-header">
      <Button
        className="entry-btn"
        style={{
          backgroundColor: "black",
          marginTop: "12px",
          fontSize: "1.3rem",
          padding: "10px"
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
            <MenuItem value={20} onClick={() => setVerifyModal([true,2])}>
              Clear All Entries
            </MenuItem>
            <MenuItem value={30} onClick={() => setVerifyModal([true,1])}>Clear Today Revision Entry</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <EntryModel modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Verify verifyModal={verifyModal} setVerifyModal={setVerifyModal} />
    </div>
  );
}
export default AppHeader;
