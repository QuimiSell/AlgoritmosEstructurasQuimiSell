// CAPA DOMINIO: Modelos y Entidades (Independientes de frameworks)

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface TutorExercise {
  id: number;
  instruction: string;
  placeholder: string;
  expectedKeywords: string[];
  hint: string;
  isEmailSubmission: boolean;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  items: string[];
  content: string;
  codeSnippet?: string;
  quiz?: QuizQuestion[];
  exercises?: TutorExercise[];
}

export interface StudyPlanReason {
  id: number;
  title: string;
  why: string;
}

export interface LabChallenge {
  title: string;
  badge: string;
  description: string;
  requirements: string[];
  cleanCodeRules: string[];
  emailSubject: string;
  emailBodyTemplate: string;
}

export interface Course {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  icon: string;
  description: string;
  whyStudyTitle: string;
  whyStudyText: string;
  modules: Module[];
  studyPlanReasons: StudyPlanReason[];
  labChallenge: LabChallenge;
}

