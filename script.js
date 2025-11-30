particlesJS("particles-js", {
  particles: {
    number: {
      value: 80, // Number of dots
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150, // Lines ki length
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2, // Speed adjust kar sakte ho
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" }, // Mouse le jaane par door bhagenge
      onclick: { enable: true, mode: "push" },
    },
  },
  retina_detect: true,
});
