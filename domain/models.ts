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
