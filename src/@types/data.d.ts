import { Project } from '../types/project';

declare module '@/constants/data' {
  const projects: Project[];
  export { projects };
}
