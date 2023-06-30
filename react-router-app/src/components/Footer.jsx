import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="page-footer blue accent-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <Link
            className="grey-text text-lighten-4 right"
            to="https://github.com/husia777/react-pet-project-3"
            rel="noreferrer"
            target="_blank"
          >
            Repo
          </Link>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
