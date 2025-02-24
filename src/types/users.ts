type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: number;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type UserState = {
  users: User[];
};

type UserActions = {
  getAllUsers: () => Promise<void>;
  getUserById: (id: number) => Promise<void>;
  addUser: (user: User) => Promise<void>;
  deleteUser: (id: number) => Promise<void>;
  updateUser: (user: User) => Promise<void>;
};

export type UserApiSlice = UserState & UserActions;
