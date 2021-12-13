export interface IAccountDTO {
  name: string;
  age: number;
  email: string;
  password: string;
}

export interface IUpdateAccountDTO {
  id: string;
  data: {
    name: string;
    age: number;
    email: string;
    password: string;
  };
}
