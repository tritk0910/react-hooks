import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p>Homepage</p>
      <Link to="/todolist">
        <button>About</button>
      </Link>
    </div>
  );
}
