import React from "react";
import "./EntryModal.css";
import { MdOutlineClose } from "react-icons/md";
// import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";

function EntryModel(props) {
    const [subject, setSubject] = React.useState('');
    const [topic, setTopic] = React.useState('');
    const [links, setLinks] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(subject,topic,links);
    }
  return (
    <div>
      {props.modalOpen && (
        <div className="wrapper">
          <div className="container">
            <div
              className="closeButton"
              onClick={() => props.setModalOpen(false)}
              onKeyDown={() => props.setModalOpen(false)}
              tabIndex={0}
              role="button"
            >
              <MdOutlineClose />
            </div>
            <form className="form" onSubmit={(e) => {
                handleSubmit(e)
            }}>
              <h1 className="formTitle">Add Entry</h1>
              <label htmlFor="">
                Subject
                <input
                 type="text" 
                 id="subject"
                 value={subject}
                 onChange = {(e) => setSubject(e.target.value)}
                  />
              </label>
              <label htmlFor="">
                Topic
                <input
                type="text"
                id="topic" 
                value={topic}
                onChange = {(e) => setTopic(e.target.value)}
                  />
              </label>
              <label htmlFor="">
                Links/Notes
                <input 
                type="text" 
                id="links" 
                value={links}
                onChange = {(e) => setLinks(e.target.value)}
                />
              </label>
              <div className="buttonContainer">
                <button type="submit" className="button">
                  Insert
                </button>

                <Button
                  variant="outlined"
                  color="error"
                  type="submit"
                  style={{ fontSize: "1.6rem" }}
                  onClick={() => props.setModalOpen(false)}
                  onKeyDown={() => props.setModalOpen(false)}
                  tabIndex={0}
                  role="button"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EntryModel;
