export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  timeZone: string;
  contactEmail: string;
  skills: string[];
  links: {
    github: string;
    linkedin: string;
  };
}

export const profile: ProfileData = {
  name: "Wafiq Nawaz",
  title: "Developer | Systems Builder | Technical Explorer",
  tagline: "I build things to understand systems, challenge assumptions, and turn ideas into working solutions.",
  bio: "A developer interested in understanding systems, exploring technologies, and building practical solutions. Focused on rigorous implementation, Linux environments, data systems, and technical depth.",
  location: "Bengaluru, India",
  timeZone: "Asia/Kolkata (IST)",
  contactEmail: "wafiqnawaz@outlook.com",
  skills: [
    "Python",
    "Linux Systems Administration",
    "Machine Learning",
    "Data Science",
    "Cybersecurity & Networking"
  ],
  links: {
    github: "https://github.com/wafiqnawaz",
    linkedin: "https://www.linkedin.com/in/wafiqnawaz",
  },
};
