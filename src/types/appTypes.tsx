export type LayoutProps = {
  children: React.ReactNode;
}

export type User = {
  id: string;
  token: string;
  role: string;
  expireIn: string;
}

export type loginData = {
  email: string;
  password: string;
}


export type signupData = {
  name: string;
  email: string;
  password: string;
  phone_number: string;
}