import styles from "./Nav.module.css";

/* Social icons — viewBox 0 0 24 24, white, stroke-width 1.5 (matches the
   original `--pgex8v:1.5` / `--21h8s6:#fff` on the source <svg>s). */

function XIcon() {
  // Modern X (Twitter) glyph, filled.
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  // Stroke-based Instagram glyph (rounded square + lens + flash dot).
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

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
        <div className={styles.right}>
          <a
            aria-label="X"
            href="https://x.com"
            target="_blank"
            rel="noopener"
            className={styles.social}
          >
            <XIcon />
          </a>
          <a
            aria-label="Instagram"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener"
            className={styles.social}
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
