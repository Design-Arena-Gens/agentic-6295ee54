export default function Page() {
  return (
    <main className="frame" aria-label="A lone samurai in tall grass under a moody sky">
      <div className="letterbox top" aria-hidden="true" />
      <div className="letterbox bottom" aria-hidden="true" />

      <div className="sky" aria-hidden="true">
        <div className="clouds layer1" />
        <div className="clouds layer2" />
        <div className="moon" />
      </div>

      <div className="horizon-glow" aria-hidden="true" />

      <div className="scene">
        <div className="katana" aria-hidden="true" />
        <div className="samurai" aria-hidden="true">
          <svg className="samurai-svg" viewBox="0 0 600 400" role="img" aria-label="Samurai silhouette">
            <g>
              {/* Head */}
              <circle cx="300" cy="210" r="18" className="samurai-fill" />
              {/* Topknot */}
              <ellipse cx="308" cy="195" rx="8" ry="5" className="samurai-fill" />
              {/* Shoulder cloak */}
              <path d="M260 230 C 280 220, 320 220, 340 230 C 360 240, 365 255, 350 270 C 330 290, 270 290, 250 270 C 235 255, 240 240, 260 230 Z" className="samurai-fill" />
              {/* Torso and knees (sitting) */}
              <path d="M260 270 C 275 285, 290 300, 300 315 C 285 320, 265 325, 245 322 C 235 305, 240 285, 252 274 Z" className="samurai-fill" />
              <path d="M300 315 C 315 300, 330 285, 345 270 C 358 282, 363 300, 355 317 C 330 321, 315 320, 300 315 Z" className="samurai-fill" />
              {/* Lower robe pooling */}
              <path d="M220 320 C 260 330, 340 330, 380 320 C 385 335, 370 350, 300 352 C 230 350, 215 335, 220 320 Z" className="samurai-fill" />
            </g>
          </svg>
        </div>
        <div className="grass fg1" aria-hidden="true" />
        <div className="grass fg2" aria-hidden="true" />
      </div>
    </main>
  );
}
