"use client";

import styles from "./ShaderBackground.module.css";

/* ────────────────────────────────────────────────────────────────────────
   Hero background — Agenciy "metal ball + waves" (exact reproduction).

   Recreates the three stacked background layers from agenciy.framer.website,
   on a black backdrop:
     1. Center Light  — a soft white glow (blur 70px), lower-center.
     2. Full-bleed video — the animated flowing dot-wave field (hero-waves.mp4).
     3. Chrome metal ball (hero-ball.svg) — a transparent PNG layered ON TOP of
        the waves, centered behind the text (matches Agenciy's z-ordering).

   Static layout (no WebGL). The only motion is the entrance animation, handled
   by the framer-motion wrapper in Hero.tsx, plus the looping video itself.
   ──────────────────────────────────────────────────────────────────────── */

export default function ShaderBackground() {
  return (
    <div className={styles.root}>
      {/* Center Light — soft white glow behind the scene */}
      <div className={styles.glow} aria-hidden="true" />

      {/* Animated dot-wave field */}
      <video
        className={styles.video}
        src="/hero-waves.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        draggable={false}
      />

      {/* Chrome metal ball — separate layer on top of the waves (transparent
          PNG, so the waves show around/through it), anchored low-center and
          gently floating. Wrapper handles position; inner img owns the float. */}
      <div className={styles.ballWrap} aria-hidden="true">
        <img
          className={styles.ball}
          src="/hero-ball.svg"
          alt=""
          draggable={false}
        />
      </div>
    </div>
  );
}
