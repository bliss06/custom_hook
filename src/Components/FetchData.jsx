import React from "react";
import UseFetch from "./UseFetch";
import "./FetchData.css";

const FetchData = () => {
  const [data] = UseFetch("https://api.npoint.io/9045c260b1565daa9e15");
  console.log(data);
  return (
    <>
      <ul className="list_data_main">
        <h1 className="usefetch_heading">Use Fetch Custom Hook</h1>
        {data &&
          data.map((item) => (
            <li className="list_data">
              <h3 className="list_data_heading">{item.name}</h3>
              <p>
                <span className="list_data_key">Importance:</span>{" "}
                {item.importance}
              </p>
              <p>
                <span className="list_data_key">Benfits:</span> {item.benefits}
              </p>
              <p>
                <span className="list_data_key">Time to eat:</span>{" "}
                {item.best_time_to_intake}
              </p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default FetchData;
