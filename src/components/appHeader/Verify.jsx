import React from "react";
import "./EntryModal.css";
import { MdOutlineClose } from "react-icons/md";
// import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";


import { db } from "../../firebase-config";
import { collection,deleteDoc,getDocs,doc} from "firebase/firestore";

function Verify(props) {

    const [revision, setRevision] = React.useState([]);
  const revisionCollectionRef = collection(db, "revision");

  React.useEffect(() => {
    const getRevision = async () => {
      const data = await getDocs(revisionCollectionRef);
      setRevision(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getRevision();
  }, []);

  const deleteUser = async(id) => {
    const userDoc = doc(db,"revision",id);
    await deleteDoc(userDoc)
  }

  const today = new Date()
  const options = { timeZone: "Asia/Kolkata" };
const indianDate = new Intl.DateTimeFormat("en-IN", options).format(today);

  const deleteToday = () => {
    console.log("today : "+indianDate);
    
    revision.map((rev)=> {
        console.log(rev.entryDate);
        if(indianDate == rev.entryDate){
           
            const id = rev.id;
            deleteUser(id)
        } 
    })

    setTimeout(()=>{
        window.location.reload()
    },700)
  }

  const deleteAll = () => {
    revision.map((rev)=> {
        const id = rev.id;
        deleteUser(id)
    })

    setTimeout(()=>{
        window.location.reload()
    },700)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(props.verifyModal[1]);
    if(props.verifyModal[1] == 1){
        deleteToday();
    }else if(props.verifyModal[1] == 2){
        deleteAll();
    }
  }
   
  return (
    <div>
      {props.verifyModal[0] && (
        <div className="wrapper">
          <div className="container">
            <div
              className="closeButton cross-btn"
              onClick={() => props.setVerifyModal([false,0])}
              onKeyDown={() => props.setVerifyModal([false,0])}
              tabIndex={0}
              role="button"
            >
              <MdOutlineClose />
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <h1 className="formTitle">Verify</h1>
              <label htmlFor="">
                Are you sure ? 
              </label>
            
              <div className="verifybuttonContainer">
                <button type="submit"  className="button insert-btn">
                  YES
                </button>

                <Button
                  variant="outlined"
                  color="error"
                  type="submit"
                  style={{ fontSize: "1.6rem" }}
                  className="cancel-btn"
                  onClick={() => {
                    props.setVerifyModal([false,0]);
                  }}
                  onKeyDown={() => props.setVerifyModal([false,0])}
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
export default Verify;
