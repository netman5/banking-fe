export type LayoutProps = {
  children: React.ReactNode;
}

export type User = {
  id: string;
  token: string;
  role: string;
  expireIn: string;
}