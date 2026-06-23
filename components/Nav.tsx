import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.left}>
          <a aria-label="MetalLabs" href="./" className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="MetalLabs"
              className={styles.logoImg}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
