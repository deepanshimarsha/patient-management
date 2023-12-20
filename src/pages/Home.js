import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h1>Patient Management Application</h1>
      <p>
        <NavLink to="/patient">Patient</NavLink>
      </p>
      <p>
        <NavLink to="/ward">Ward</NavLink>
      </p>
      <p>
        <NavLink to="/stats">Hospital Stats</NavLink>
      </p>
    </div>
  );
}
