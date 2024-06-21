import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Loading.jsx";
import { getAllMan } from "./helpers.js";
import Manufacters from "./Manufacters.jsx";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getAllMan();
        setData(res);
        console.log(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main>
        {loading && <Loading />}
        <Manufacters data={data} />
      </main>
    </>
  );
}

export default App;
