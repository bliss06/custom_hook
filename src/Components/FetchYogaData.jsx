import UseFetch from "./UseFetch";

const FetchYogaData = () => {
  const [data] = UseFetch("https://api.npoint.io/4459a9a10e43812e1152");
  console.log(data);

  return (
    <div>
      <h1>Yoga Data</h1>

      <ul className="list_data_main">
        <h1 className="usefetch_heading">Yoga Pose Data</h1>
        {data &&
          data.map((item) => (
            <li className="list_data">
              <h3 className="list_data_heading">{item.name}</h3>

              <p>
                <span className="list_data_key">Benfits:</span> {item.benefits}
              </p>
              <p>
                <span className="list_data_key">Duration:</span>{" "}
                {item.time_duration}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FetchYogaData;
