
import type { LearningStyle, ModuleType, DifficultyLevel } from '@/types/course';
import { Eye, Ear, Zap, Video, AudioLines, Gamepad2, FileTextIcon, ScanSearch, ListChecks, MessageSquare } from 'lucide-react';


export const learningStyleIcons: Record<LearningStyle, React.ElementType> = {
  visual: Eye,
  auditory: Ear,
  kinesthetic: Zap,
};

export const moduleTypeIcons: Record<ModuleType | 'discussion', React.ElementType> = { // Added 'discussion' for type safety if used as a key
    video: Video,
    audio: AudioLines,
    interactive_exercise: Gamepad2,
    reading_material: FileTextIcon,
    ar_interactive_lab: ScanSearch,
    discussion: MessageSquare, // Added for potential use, or general icon
};

export const difficultyLevels: DifficultyLevel[] = ['Beginner', 'Intermediate', 'Advanced'];

export interface SuggestedYouTubeVideo {
  videoId: string;
  title: string;
  thumbnailUrl?: string; // URL to the video thumbnail
  channelTitle?: string;
  description?: string; // Optional, can be long
  publishedAt?: string; // ISO string date
  viewCount?: string; // Often a string like "1,234,567 views"
  likeCount?: string; // Also often a string
}

export interface CourseModule {
  id: string;
  type: ModuleType;
  title: string;
  url?: string; // URL for video/audio/external exercise/AR lab
  content?: string; // For reading material or inline exercise description
  description?: string; // Description for the module, especially useful for videos
  estimatedDuration?: string; // e.g., "30 mins", "1 hour"
  tags?: string[]; // Keywords for searching relevant YouTube videos
  suggestedYoutubeVideos?: SuggestedYouTubeVideo[]; // Videos suggested by AI/Cloud Function
}

export interface Course {
  id: string;
  name: string;
  description: string;
  learningStyle: LearningStyle;
  category?: string;
  difficulty?: DifficultyLevel;
  modules: CourseModule[];
  price?: number; // Optional: Price of the course
  currency?: string; // Optional: Currency for the price (e.g., "INR", "USD")
}

