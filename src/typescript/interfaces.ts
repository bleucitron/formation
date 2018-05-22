interface User {
  name: string;
}

export interface Tweet {
  text: string;
  created_at: string;
  lang: string;
  user: User;
}
