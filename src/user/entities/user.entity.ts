import { Queet } from 'src/queet/entities/queet.entity';

export class User {
  id: number;
  auth0id: string;
  nickname: string;
  description: string;
  location: string;
  username: string;
  profileUri: string;
  queets: Queet[];
}
