import React from "react";
import Card from "./Card";
import "./hero.css";
import { db } from "../../firebase-config";
import { collection, getDocs} from "firebase/firestore";

function Hero(props) {
  const [revision, setRevision] = React.useState([]);
  const revisionCollectionRef = collection(db, "revision");

  React.useEffect(() => {
    const getRevision = async () => {
      const data = await getDocs(revisionCollectionRef);
      setRevision(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getRevision();
  }, []);

//   const today = new Date().toISOString().slice(0, 10);
const options = { timeZone: "Asia/Kolkata" };
 

  function getDaysAgo(daysAgo) {
    const today = new Date();
    const millisecondsPerDay = 86400000;
    const daysAgoDate = new Date(today - daysAgo * millisecondsPerDay);
    const indianDate = new Intl.DateTimeFormat("en-IN", options).format(daysAgoDate); 
    return indianDate;
  }

  const arr = [3,7,15,30,45,60];
  var dates = [];
  function data(arr) {
    arr.map((data) => {
        dates.push(getDaysAgo(data));
    })
  }

  data(arr)

  var flag = false;
  var lastRevisioned = ''

  function checkDate(date) {
    for(let i=0;i<dates.length;i++){
        if(dates[i] === date){
            flag = true;
            switch(i) {
                case 0 : lastRevisioned = '3 days Ago'
                break;
                case 1 : lastRevisioned = '4 days Ago'
                break;
                case 2 : lastRevisioned = '8 days Ago'
                break;
                case 3 : lastRevisioned = '15 days Ago'
                break;
                case 4 : lastRevisioned = '15 days Ago'
                break;
                case 5 : lastRevisioned = '15 days Ago'
                break;
                default : console.log("Invalid");
            }
        }
    }
  }



  return (
    <div className="hero">
      {revision.map((rev) => {

        checkDate(rev.entryDate);

        if(flag) {
            return (
            <div>
            {" "}
          <Card
            subject={rev.subject}
            topic={rev.topic}
            link={rev.link}
            date={rev.entryDate}
            lastRevisioned={lastRevisioned}
          />

          {flag = false}
          {lastRevisioned = ''}
          </div>
        );
        }
      })}
    </div>
  );
}

export default Hero;
