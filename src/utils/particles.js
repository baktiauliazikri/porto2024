import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadFull } from "tsparticles";

const ParticlesComponent = ({ id = "particles", theme = "dark" }) => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });
  }, []);

  const isDark = theme === "dark";

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 3,
          },
          grab: {
            distance: 140,
            links: {
              opacity: isDark ? 0.5 : 0.4,
            },
          },
        },
      },
      particles: {
        color: {
          value: isDark ? "#60d86e" : "#16a34a",
        },
        links: {
          color: isDark ? "#60d86e" : "#475569",
          distance: 130,
          enable: true,
          opacity: isDark ? 0.22 : 0.18,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 900,
          },
          value: 65,
        },
        opacity: {
          value: isDark ? 0.45 : 0.35,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [isDark]
  );

  return <Particles id={id} options={options} />;
};

export default ParticlesComponent;
