export interface ProjectDemoConfig {
  liveLink?: string;
  demoVideo?: string;
}

export const projectDemos: Record<string, ProjectDemoConfig> = {
  // Example mappings based on EXACT GitHub repository names:
  // Add your actual repository names below instead of "example-repo-name"
  "wardrobe-map": {
    liveLink: "https://example.com",
    demoVideo: "https://www.youtube.com/embed/e-4a3-MwOoM"
  },
  "portfolio": {
    liveLink: "https://krktech.portfolio.com",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
  }
};
