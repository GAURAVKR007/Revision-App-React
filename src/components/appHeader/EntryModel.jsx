import React from "react";
import "./EntryModal.css";
import { MdOutlineClose } from "react-icons/md";
// import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

function EntryModel(props) {
    // const [revision, setRevision] = React.useState([]);
  const revisionCollectionRef = collection(db, "revision");

//   const createRivision = async () => {
//     await addDoc(revisionCollectionRef,{subject: data.subject,topic:data.topic,link:data.links,entryDate: currentDate})
//   }

//   React.useEffect(() => {
//     const getRevision = async () => {
//       const data = await getDocs(revisionCollectionRef);
//       setRevision(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     getRevision();
//   }, []);


const date = new Date(); // create a new Date object with the current date and time
const options = { timeZone: "Asia/Kolkata" };
const indianDate = new Intl.DateTimeFormat("en-IN", options).format(date);
    

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

  const handleSubmit = async(event) =>  {
    event.preventDefault();
    props.setModalOpen(false);
    const entry = {
        subject: data.subject,
        topic: data.topic,
        links: data.links,
        entryDate: indianDate
    }

    await addDoc(revisionCollectionRef,{subject: entry.subject,topic:entry.topic,link:entry.links,entryDate: indianDate})

    console.log(entry);
    setData({
      subject: "",
      topic: "",
      links: "",
    });

    window.location.reload()
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
                  autocomplete="off"
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
                  autocomplete="off"
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
                  autocomplete="off"
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
