import React from "react";
import { 
  Home, 
  HelpCircle, 
  History, 
  Sparkles, 
  BookOpen, 
  User 
} from "lucide-react";

export const sidenavItems = [
  {
    id: 1,
    title: "মূল পাতা ও ক্যালকুলেটর",
    path: "/home",
    icon: Home,
    description: "নেসাব নির্ণয় ও কুরবানীর মূল পরিচিতি",
  },
  {
    id: 2,
    title: "মাসায়েল ও ফাতাওয়া",
    path: "/question",
    icon: HelpCircle,
    badge: "৩০+",
    description: "মাসিক আল-কাওসার থেকে প্রশ্ন ও উত্তর",
  },
  {
    id: 3,
    title: "কুরবানির নিয়মাবলী",
    path: "/qurbani-details",
    icon: BookOpen,
    description: "পশু নির্বাচন, বয়স ও গোশত বণ্টন",
  },
  {
    id: 4,
    title: "কুরবানির ইতিহাস",
    path: "/history",
    icon: History,
    description: "হাবিল-কাবিল ও ইব্রাহিম (আ.)-এর ত্যাগ",
  },
  {
    id: 5,
    title: "যিলহজের আমল ও তাকবীর",
    path: "/amol",
    icon: Sparkles,
    badge: "ফযীলত",
    description: "প্রথম দশকের নেক আমল ও তাসবীহ",
  },
  {
    id: 6,
    title: "আমাদের সম্পর্কে",
    path: "/about",
    icon: User,
    description: "ডেভেলপার পরিচিতি ও যোগাযোগ",
  },
];

export default sidenavItems;
