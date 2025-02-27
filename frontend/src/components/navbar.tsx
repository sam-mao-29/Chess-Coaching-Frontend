// components/Navbar.tsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>Dashboard</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/students" style={styles.link}>Students</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/schedule" style={styles.link}>Schedule</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
  },
  navItem: {
    marginRight: '15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
};

export default Navbar;