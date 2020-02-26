export interface User {
  name: string;
}

export interface Tweet {
  text: string;
  lang: string;
  created_at: string;
  user: User;
}
