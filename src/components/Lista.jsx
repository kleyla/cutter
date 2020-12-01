import React, { useEffect, useState } from "react";
import aData from "./../data/a.json";

const Lista = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    setData(aData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((item, index) => {
          return <li>{item.number}</li>;
        })}
      </ul>
    </div>
  );
};

export default Lista;
