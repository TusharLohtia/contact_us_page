import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className={styles.logo}>
        <img src='/images/logo.png' alt='do some coding logo'/>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navigation;