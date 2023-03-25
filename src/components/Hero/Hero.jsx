import React from "react";
import Card from "./Card";
import "./hero.css";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

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

  return (
    <div className="hero">
      {revision.map((rev) => {
        return (
            <div>
            {" "}
          <Card
            subject={rev.subject}
            topic={rev.topic}
            link={rev.link}
          />
          </div>
        );
      })}
    </div>
  );
}

export default Hero;
