export default interface ILoader {
  id: number;
  html: string;
  style: string;
  tags: string[];
  credits?: {
    name: string;
    link?: string | null;
  } | null;
}
