import { useEffect, useState } from "react";
import axios from "axios";
import Start from "./components/Start";
import Info from "./components/Info";

const apiUrl = process.env.REACT_APP_API_URL;

function App() {
  const [userInfo, setUserInfo] = useState({
    speed: 0,
    location: "",
    ip: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isStarted, setIsStarted] = useState(false);

  const fetchSpeed = async () => {
    await axios
      .get(apiUrl)
      .then((res) => {
        const { downloadSpeed, userLocation, userIp } = res.data;
        setUserInfo({
            speed: downloadSpeed,
            location: userLocation,
            ip: userIp,
          });
      })
      .catch((err) => {
        console.log(err);
      });
      setIsLoading(false);
  };

  useEffect(() => {
    fetchSpeed();
  }, []);

  // useEffect(() => {
  //   console.log(userInfo);
  // }, [userInfo]);

  return (
    <div className="container">
      <h2>How Fast Is Your Internet?</h2>
      {!isStarted ? (
        <div>
          <Start handleStart={() => setIsStarted(true)} />
        </div>
      ) : isLoading ? (
        <div className="loader"></div>
      ) : (
        <Info speed={userInfo.speed} ip={userInfo.ip} location={userInfo.location} />
      )}
    </div>
  );
}
export default App;
