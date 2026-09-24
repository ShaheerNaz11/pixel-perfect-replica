export type Accent = "blue" | "purple" | "coral" | "yellow" | "mint" | "pink";

export const accents: Accent[] = ["blue", "purple", "coral", "yellow", "mint", "pink"];

export const accentBg: Record<Accent, string> = {
  blue: "bg-blue",
  purple: "bg-purple",
  coral: "bg-coral",
  yellow: "bg-yellow",
  mint: "bg-mint",
  pink: "bg-pink",
};

export const stats = [
  { value: 2500, suffix: "+", label: "Students", accent: "blue" as Accent },
  { value: 150, suffix: "+", label: "Faculty", accent: "coral" as Accent },
  { value: 20, suffix: "+", label: "Departments", accent: "yellow" as Accent },
  { value: 100, suffix: "+", label: "Courses", accent: "mint" as Accent },
  { value: 40, suffix: "+", label: "Clubs", accent: "purple" as Accent },
  { value: 25, suffix: "+", label: "Facilities", accent: "pink" as Accent },
];

export const features = [
  {
    title: "Smart Learning",
    desc: "Digital classrooms and collaborative learning.",
    accent: "blue" as Accent,
    to: "/academics",
  },
  {
    title: "Smart Campus",
    desc: "Explore buildings, labs and facilities.",
    accent: "purple" as Accent,
    to: "/campus",
  },
  {
    title: "Smart Events",
    desc: "Discover workshops, hackathons and campus events.",
    accent: "coral" as Accent,
    to: "/events",
  },
  {
    title: "Smart Community",
    desc: "Connect students, teachers and clubs.",
    accent: "yellow" as Accent,
    to: "/community",
  },
  {
    title: "Smart Facilities",
    desc: "Explore modern campus infrastructure.",
    accent: "mint" as Accent,
    to: "/facilities",
  },
  {
    title: "Smart Sustainability",
    desc: "Discover green-campus initiatives.",
    accent: "pink" as Accent,
    to: "/about",
  },
];

export const pulse = [
  { icon: "🟢", label: "Campus Status", value: "Active" },
  { icon: "🎓", label: "Students Online", value: "1,248" },
  { icon: "📅", label: "Events Today", value: "06" },
  { icon: "💻", label: "Labs Available", value: "14" },
  { icon: "📚", label: "Library Occupancy", value: "68%" },
  { icon: "☕", label: "Cafeteria", value: "Open" },
];

export type Place = {
  id: string;
  name: string;
  category: "Academic" | "Facilities" | "Sports" | "Hostel";
  capacity: string;
  status: string;
  detail: string;
  tech: string;
  accent: Accent;
  x: number;
  y: number;
};

export const places: Place[] = [
  { id: "main", name: "Main Block", category: "Academic", capacity: "1,200", status: "Open", detail: "Administration, classrooms and the central atrium.", tech: "Smart boards / Campus Wi-Fi 6", accent: "blue", x: 18, y: 22 },
  { id: "ai", name: "AI & Data Science Lab", category: "Academic", capacity: "60", status: "Open", detail: "60 workstations with GPU clusters for research.", tech: "AI / ML / Computer Vision", accent: "purple", x: 44, y: 14 },
  { id: "library", name: "Library", category: "Academic", capacity: "400", status: "Open · 68% full", detail: "Digital archive, silent zones and reading pods.", tech: "RFID lending / e-Journals", accent: "mint", x: 70, y: 24 },
  { id: "audi", name: "Auditorium", category: "Facilities", capacity: "800", status: "Event at 4 PM", detail: "Acoustic hall for seminars and cultural nights.", tech: "4K projection / Live streaming", accent: "coral", x: 26, y: 48 },
  { id: "complab", name: "Computer Lab", category: "Academic", capacity: "80", status: "Open", detail: "Programming labs with dual-boot workstations.", tech: "Cloud IDE / Linux cluster", accent: "yellow", x: 55, y: 44 },
  { id: "innovation", name: "Innovation Center", category: "Academic", capacity: "120", status: "Open", detail: "Startup incubator, maker space and 3D printing.", tech: "IoT / Robotics / Prototyping", accent: "pink", x: 80, y: 52 },
  { id: "sports", name: "Sports Ground", category: "Sports", capacity: "2,000", status: "Open till 8 PM", detail: "Athletics track, cricket and football grounds.", tech: "Floodlights / Fitness tracking", accent: "mint", x: 16, y: 74 },
  { id: "cafe", name: "Cafeteria", category: "Facilities", capacity: "300", status: "Open", detail: "Multi-cuisine counters with cashless payments.", tech: "Smart queue display", accent: "yellow", x: 44, y: 78 },
  { id: "hostel", name: "Hostel", category: "Hostel", capacity: "900", status: "Occupied 84%", detail: "Boys and girls blocks with study lounges.", tech: "Smart access / Solar water", accent: "blue", x: 68, y: 80 },
  { id: "medical", name: "Medical Center", category: "Facilities", capacity: "25", status: "24 × 7", detail: "On-campus clinic with an ambulance on standby.", tech: "Tele-consultation", accent: "coral", x: 88, y: 28 },
];

export const departments = [
  { name: "Artificial Intelligence & Data Science", short: "Machine intelligence, data engineering and applied research.", programs: ["B.Tech AI & DS", "M.Tech Data Science"], faculty: 28, labs: 6, accent: "purple" as Accent },
  { name: "Computer Science", short: "Software systems, networks, security and cloud computing.", programs: ["B.E. CSE", "M.E. Software Systems"], faculty: 34, labs: 8, accent: "blue" as Accent },
  { name: "Electronics", short: "Embedded systems, VLSI design and signal processing.", programs: ["B.E. ECE", "M.E. VLSI"], faculty: 26, labs: 7, accent: "coral" as Accent },
  { name: "Mechanical", short: "Design, thermal engineering and advanced manufacturing.", programs: ["B.E. Mechanical", "M.E. CAD/CAM"], faculty: 24, labs: 9, accent: "yellow" as Accent },
  { name: "Civil", short: "Structures, smart cities and sustainable construction.", programs: ["B.E. Civil", "M.E. Structural"], faculty: 19, labs: 5, accent: "mint" as Accent },
  { name: "Electrical", short: "Power systems, renewable energy and automation.", programs: ["B.E. EEE", "M.E. Power Systems"], faculty: 21, labs: 6, accent: "pink" as Accent },
];

export const faculty = [
  { name: "Dr. Ananya Rao", role: "Professor & Head", dept: "AI & Data Science", expertise: "Computer Vision, Deep Learning", accent: "purple" as Accent },
  { name: "Dr. Vikram Menon", role: "Associate Professor", dept: "Computer Science", expertise: "Distributed Systems, Cloud", accent: "blue" as Accent },
  { name: "Dr. Sana Iqbal", role: "Professor", dept: "Electronics", expertise: "VLSI, Edge Computing", accent: "coral" as Accent },
  { name: "Dr. Rahul Deshmukh", role: "Assistant Professor", dept: "Mechanical", expertise: "Additive Manufacturing", accent: "yellow" as Accent },
  { name: "Dr. Meera Krishnan", role: "Professor", dept: "Civil", expertise: "Smart Cities, Structures", accent: "mint" as Accent },
  { name: "Dr. Imran Shaikh", role: "Associate Professor", dept: "Electrical", expertise: "Renewable Energy Systems", accent: "pink" as Accent },
];

export type CampusEvent = {
  title: string;
  category: "Workshops" | "Hackathons" | "Seminars" | "Cultural" | "Sports" | "Technical";
  date: string;
  time: string;
  venue: string;
  desc: string;
  accent: Accent;
  when: "featured" | "upcoming" | "past";
};

export const events: CampusEvent[] = [
  { title: "AI Hackathon 48", category: "Hackathons", date: "12 Oct", time: "9:00 AM", venue: "Innovation Center", desc: "48 hours of building AI products with mentors.", accent: "purple", when: "featured" },
  { title: "Smart Campus Tech Fest", category: "Technical", date: "18 Oct", time: "10:00 AM", venue: "Main Block", desc: "Project expo, robotics arena and tech talks.", accent: "blue", when: "featured" },
  { title: "Cultural Night — Rangmanch", category: "Cultural", date: "24 Oct", time: "6:30 PM", venue: "Auditorium", desc: "Music, dance and drama by campus clubs.", accent: "coral", when: "featured" },
  { title: "Computer Vision Workshop", category: "Workshops", date: "02 Nov", time: "11:00 AM", venue: "AI & DS Lab", desc: "Hands-on session on object detection models.", accent: "mint", when: "upcoming" },
  { title: "IoT & Edge Seminar", category: "Seminars", date: "07 Nov", time: "2:00 PM", venue: "Seminar Hall 2", desc: "Industry talk on edge deployments at scale.", accent: "yellow", when: "upcoming" },
  { title: "Inter-College Athletics", category: "Sports", date: "15 Nov", time: "8:00 AM", venue: "Sports Ground", desc: "Track and field championship across 20 colleges.", accent: "pink", when: "upcoming" },
  { title: "Cloud Native Bootcamp", category: "Workshops", date: "21 Nov", time: "9:30 AM", venue: "Computer Lab", desc: "Containers, CI/CD and observability in practice.", accent: "blue", when: "upcoming" },
  { title: "Robo Soccer League", category: "Technical", date: "28 Sep", time: "3:00 PM", venue: "Innovation Center", desc: "Autonomous bots competed across 16 teams.", accent: "purple", when: "past" },
  { title: "Green Campus Drive", category: "Seminars", date: "12 Sep", time: "9:00 AM", venue: "Campus Lawn", desc: "1,200 saplings planted by students and staff.", accent: "mint", when: "past" },
];

export const clubs = [
  { name: "AI Club", emoji: "🧠", desc: "Weekly paper reading and model-building sprints.", members: 180, next: "Prompt Engineering Jam · 10 Oct", accent: "purple" as Accent },
  { name: "Coding Club", emoji: "⌨️", desc: "Competitive programming and open-source work.", members: 240, next: "Div-2 Contest · 08 Oct", accent: "blue" as Accent },
  { name: "Robotics Club", emoji: "🤖", desc: "Autonomous bots, drones and embedded builds.", members: 120, next: "Drone Build Night · 14 Oct", accent: "coral" as Accent },
  { name: "Entrepreneurship Club", emoji: "🚀", desc: "Startup clinics and investor conversations.", members: 95, next: "Pitch Friday · 11 Oct", accent: "yellow" as Accent },
  { name: "Cultural Club", emoji: "🎭", desc: "Theatre, music and campus festival production.", members: 210, next: "Rangmanch Rehearsal · 09 Oct", accent: "pink" as Accent },
  { name: "Sports Club", emoji: "🏅", desc: "Inter-department leagues and fitness programs.", members: 260, next: "Football Trials · 13 Oct", accent: "mint" as Accent },
];

export const stories = [
  { tag: "Student Achievement", title: "Team Nexus wins National AI Challenge", body: "Four AI & DS students topped 380 teams with a crop-disease detection model.", accent: "purple" as Accent },
  { tag: "Faculty Research", title: "Patent granted for low-power IoT sensor", body: "Dr. Sana Iqbal's edge sensor cuts energy use by 42% in field trials.", accent: "coral" as Accent },
  { tag: "Club Activity", title: "Robotics Club ships campus delivery bot", body: "A student-built bot now moves lab equipment between blocks.", accent: "blue" as Accent },
  { tag: "Hackathon", title: "48 hours, 62 prototypes", body: "AI Hackathon 48 closed with three projects entering the incubator.", accent: "yellow" as Accent },
  { tag: "Social Initiative", title: "Digital literacy for 500 local students", body: "Volunteers ran weekend classes across six neighbourhood schools.", accent: "mint" as Accent },
  { tag: "Campus Life", title: "Rangmanch returns to the Auditorium", body: "Three nights of theatre and music produced entirely by students.", accent: "pink" as Accent },
];

export const facilities = [
  { name: "Smart Classrooms", desc: "Interactive panels with lecture capture.", capacity: "60 seats each", availability: "Available", location: "Main Block", emoji: "🖥️", accent: "blue" as Accent },
  { name: "AI Lab", desc: "GPU workstations for deep learning research.", capacity: "60", availability: "Open", location: "Block C", emoji: "🧠", accent: "purple" as Accent },
  { name: "IoT Lab", desc: "Sensor kits, boards and edge gateways.", capacity: "40", availability: "Open", location: "Block C", emoji: "📡", accent: "mint" as Accent },
  { name: "Digital Library", desc: "E-journals, archives and silent pods.", capacity: "400", availability: "68% occupied", location: "Library Block", emoji: "📚", accent: "yellow" as Accent },
  { name: "Innovation Center", desc: "Incubator, maker space and 3D printing.", capacity: "120", availability: "Open", location: "North Wing", emoji: "🚀", accent: "coral" as Accent },
  { name: "Auditorium", desc: "Acoustic hall with 4K projection.", capacity: "800", availability: "Booked 4 PM", location: "Central Plaza", emoji: "🎤", accent: "pink" as Accent },
  { name: "Gym", desc: "Strength and cardio zones with trainers.", capacity: "80", availability: "Open", location: "Sports Complex", emoji: "🏋️", accent: "blue" as Accent },
  { name: "Sports Ground", desc: "Track, cricket and football grounds.", capacity: "2,000", availability: "Open till 8 PM", location: "East Campus", emoji: "⚽", accent: "mint" as Accent },
  { name: "Cafeteria", desc: "Multi-cuisine counters, cashless billing.", capacity: "300", availability: "Open", location: "Central Plaza", emoji: "☕", accent: "yellow" as Accent },
  { name: "Hostel", desc: "Residential blocks with study lounges.", capacity: "900", availability: "84% occupied", location: "West Campus", emoji: "🏠", accent: "purple" as Accent },
];

export const announcements = [
  { title: "New Announcement", body: "Internal assessment timetable released.", accent: "yellow" as Accent },
  { title: "Upcoming Event", body: "AI Hackathon — tomorrow, Innovation Center.", accent: "purple" as Accent },
  { title: "Campus Update", body: "Library timings extended till 10 PM.", accent: "mint" as Accent },
];

export type SearchItem = { label: string; group: string; to: string; hint: string };

export const searchIndex: SearchItem[] = [
  ...faculty.map((f) => ({ label: f.name, group: "Faculty", to: "/faculty", hint: `${f.role} · ${f.dept}` })),
  ...departments.map((d) => ({ label: d.name, group: "Departments", to: "/academics", hint: `${d.faculty} faculty · ${d.labs} labs` })),
  ...events.map((e) => ({ label: e.title, group: "Events", to: "/events", hint: `${e.date} · ${e.venue}` })),
  ...clubs.map((c) => ({ label: c.name, group: "Clubs", to: "/community", hint: `${c.members} members` })),
  ...facilities.map((f) => ({ label: f.name, group: "Facilities", to: "/facilities", hint: `${f.location} · ${f.availability}` })),
  ...announcements.map((a) => ({ label: a.title, group: "Announcements", to: "/dashboard", hint: a.body })),
];
