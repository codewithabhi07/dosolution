import { FilmItem } from "@/types";

export const FEATURED_STORY = {
  label: "A STORY WORTH REMEMBERING",
  title: "Aditi & Rohan's Royal Union",
  subtitle: "Two people. Two families. One beautiful beginning.",
  location: "Fort JadhavGADH, Pune",
  description:
    "Set against the rugged stone bastions of historic Maharashtra, Aditi and Rohan celebrated three days of vibrant laughter, royal Maharashtrian customs, and intimate promises under the stars.",
  duration: "4 min 18 sec",
  date: "Winter Celebration",
  thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", // configurable YouTube/Vimeo embed
};

export const CINEMATOGRAPHY_FILMS: FilmItem[] = [
  {
    id: "film-1",
    title: "Symphony of Souls — Aditi & Rohan",
    type: "Cinematic Wedding Film",
    couple: "Aditi & Rohan",
    location: "Oxford Golf Resort, Pune",
    duration: "4:24",
    thumbnailUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1",
    isFeatured: true,
  },
  {
    id: "film-2",
    title: "Golden Hour Promises — Pooja & Sameer",
    type: "Teaser",
    couple: "Pooja & Sameer",
    location: "Sula Vineyards, Nashik",
    duration: "1:15",
    thumbnailUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1",
  },
  {
    id: "film-3",
    title: "The Heritage Vow — Gauri & Tanmay",
    type: "Highlight Film",
    couple: "Gauri & Tanmay",
    location: "Girna Valley, Malegaon",
    duration: "3:48",
    thumbnailUrl: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=85",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1",
  },
  {
    id: "film-4",
    title: "Echoes of Eternity — Snehal & Omkar",
    type: "Couple Story",
    couple: "Snehal & Omkar",
    location: "Radisson Blu, Nashik",
    duration: "2:50",
    thumbnailUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1",
  },
];
