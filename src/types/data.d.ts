import { Project } from './project';

declare module '@/constants/data' {
  const projects: Project[];
  export { projects };
}
