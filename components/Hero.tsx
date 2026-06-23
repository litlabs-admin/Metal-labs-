"use client";

import { motion } from "framer-motion";
import ShaderBackground from "./ShaderBackground";
import styles from "./Hero.module.css";

// Easing curves recovered verbatim from the Framer appear-animation data.
const EASE_SHADER = [0.23, 0.83, 0.56, 1] as const;
const EASE_TEXT = [0.44, 0, 0.56, 1] as const;

function EmailForm({ variant }: { variant: "desktop" | "phone" }) {
  const formClass =
    variant === "desktop" ? styles.formDesktop : styles.formPhone;
  return (
    <div className={styles.formWrap}>
      <form
        className={`${styles.form} ${formClass}`}
        onSubmit={(e) => e.preventDefault()}
      >
        <label className={styles.emailLabel} aria-label="Email">
          <input
            type="email"
            required
            name="Email"
            placeholder="Your Email Address"
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.submit}>
          <span className={styles.submitText}>Get early access</span>
        </button>
      </form>
    </div>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background shader — appears with y:80 → 0, opacity over 0.8s */}
      <motion.div
        className={styles.shaderContainer}
        initial={{ opacity: 0.001, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0, ease: EASE_SHADER }}
      >
        <ShaderBackground />
      </motion.div>

      <div className={styles.content}>
        <div className={styles.header}>
          {/* Badge — opacity only, 0.4s, delay 0.6s */}
          <motion.p
            className={styles.badge}
            initial={{ opacity: 0.001 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6, ease: EASE_TEXT }}
          >
            Coming soon
          </motion.p>

          <div className={styles.titles}>
            {/* Headline + subheadline group — opacity only, 0.4s, delay 0.4s */}
            <motion.div
              className={styles.headlineGroup}
              initial={{ opacity: 0.001 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4, ease: EASE_TEXT }}
            >
              <h1 className={styles.headline}>
                The most human like agent ever
              </h1>
            </motion.div>

            {/* Email form — y:10 → 0, opacity, 0.6s, delay 0.4s */}
            <motion.div
              className={styles.formContainer}
              initial={{ opacity: 0.001, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE_TEXT }}
            >
              {/* Desktop / tablet pill (≥810px) */}
              <div className={styles.showDesktop}>
                <EmailForm variant="desktop" />
              </div>
              {/* Mobile stacked (≤809.98px) */}
              <div className={styles.showPhone}>
                <EmailForm variant="phone" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
