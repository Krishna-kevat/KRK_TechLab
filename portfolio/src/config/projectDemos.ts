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
  "KRK_TechLab": {
    liveLink: "http://krk-tech-lab.vercel.app/",
    demoVideo: "https://www.youtubeexample.com/embed/dQw4w9WgXcQ?autoplay=1"
  }
  ,
  "E-news": {
    demoVideo: "https://www.youtube.com/embed/9MHZaR8mMeI"
  },
};
