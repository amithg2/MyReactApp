import "./Manufacter.css";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

export default function Manufacter({ manu }) {
  return (
    <div className="Manufacter">
      <h4>
        <b>{manu.Mfr_CommonName}</b>
      </h4>
      <p>{manu.Country}</p>

      <small>{manu.Mfr_Name}</small>
        <Link to={`/manufacter/${manu.Mfr_CommonName}`}>Details</Link>
    </div>
  );
}
