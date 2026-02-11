import { useEffect, useState } from "react";

function App() {
  const [osData, setOsData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/os-info")
      .then((res) => res.json())
      .then((data) => setOsData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!osData) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>OS Information</h2>
      <p>Platform: {osData.platform}</p>
      <p>Architecture: {osData.arch}</p>
      <p>Free Memory: {osData.freeMemory}</p>
      <p>Total Memory: {osData.totalMemory}</p>
      <p>Uptime: {osData.uptime}</p>
      <p>Home Directory: {osData.homeDir}</p>
      <p>Host Name: {osData.hostName}</p>
    </div>
  );
}

export default App;
