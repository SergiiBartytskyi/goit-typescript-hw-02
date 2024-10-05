export interface IFormValues {
  query: string;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}
