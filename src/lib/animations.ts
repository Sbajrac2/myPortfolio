
import { Variants } from 'framer-motion';

// Staggered children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

// Fade up animation
export const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Panel flip animation
export const panelFlip: Variants = {
  hidden: { 
    opacity: 0, 
    rotateY: 90,
    originX: 0
  },
  show: { 
    opacity: 1, 
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

// Scale in
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

// Comic panel animations
export const comicPanel: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    rotate: -3
  },
  show: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

// Manga page flip animation
export const mangaPageFlip: Variants = {
  hidden: { 
    opacity: 0,
    rotateY: 70,
    transformOrigin: "left center"
  },
  show: { 
    opacity: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15
    }
  }
};

// Manga zoom animation
export const mangaZoom: Variants = {
  hidden: { 
    opacity: 0,
    scale: 1.2
  },
  show: { 
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15
    }
  }
};

// Dialogue bubble pop
export const dialogueBubble: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5,
    y: 10
  },
  show: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

// Page transition
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.4,
    }
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
