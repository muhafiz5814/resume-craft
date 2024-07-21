import "./Layout.css"
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="app">
      <h1 className="logo">
        <Link to="/" className="link-to-home">Resume Craft</Link>
      </h1>
      <div className="main">{children}</div>
    </div>
  );
}