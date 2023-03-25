import React from "react";
import "./EntryModal.css";
import { MdOutlineClose } from "react-icons/md";
// import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";

function EntryModel(props) {
  // const [subject, setSubject] = React.useState('');
  // const [topic, setTopic] = React.useState('');
  // const [links, setLinks] = React.useState('');

  let currentDate = new Date().toISOString().slice(0, 10);
    

  const [data, setData] = React.useState({
    subject: "",
    topic: "",
    links: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.setModalOpen(false);
    const entry = {
        subject: data.subject,
        topic: data.topic,
        links: data.links,
        entryDate: currentDate
    }
    console.log(entry);
    setData({
      subject: "",
      topic: "",
      links: "",
    });
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
            <form className="form" onSubmit={handleSubmit}>
              <h1 className="formTitle">Add Entry</h1>
              <label htmlFor="">
                Subject
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={data.subject}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="">
                Topic
                <input
                  type="text"
                  id="topic"
                  name="topic"
                  value={data.topic}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="">
                Links/Notes
                <input
                  type="text"
                  name="links"
                  id="links"
                  value={data.links}
                  onChange={handleChange}
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
                  onClick={() => {
                    props.setModalOpen(false);
                    setData({
                      subject: "",
                      topic: "",
                      links: "",
                    });
                  }}
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
