import { useContext } from "react";
import BucketContext from "../context/BucketContext";
import "./BucketList.css";
import EventList from "./EventList";

const BucketList = () => {
  const { bucketList } = useContext(BucketContext);

  return (
    <div className="BucketList">
      <EventList events={bucketList} />
    </div>
  );
};

export default BucketList;
