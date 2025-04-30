import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="main-content">
      <h1 className="home-title custom-title">
        DANI DOES STUFF
      </h1>
      <Link
        to="/portfolio"
        className="home-subtitle font-quicksand"
      >
        What kind of stuff?
      </Link>
    </main>
  );
}