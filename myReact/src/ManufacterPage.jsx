import { useParams } from "react-router-dom";
import { getMan } from "./helpers";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import "./ManufacterPage.css"
export default function ManufacterPage() {
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [manufacter, setManufacter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getMan(name);
        setManufacter(res);
        setLoading(false);
        console.log(res)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="ManufacterPage">
      {loading && <Loading />}
      <h1>Manufacter Page</h1>

      {manufacter.map((m) => <div key={m.Mfr_ID}>
        <h4>{m.Mfr_CommonName}</h4>
        <p>{m.Country}</p>
        <small>{m.Mfr_Name}</small>
      </div> )}
    </div>
  );
}
