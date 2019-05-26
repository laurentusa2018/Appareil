import {User} from '../models/User.model';
import {Subject} from 'rxjs';

export class UserService {
  private users: User[] = [
    {
      firstName: 'James',
      lastName: 'Smith',
      email: 'james.smith@opcrm.com',
      drinkPreference: 'coka-cola',
      hobbies: [
        'coder',
        'tennis',
        'pétanque'
      ]
    }
  ];
  // tslint:disable-next-line:new-parens
  // @ts-ignore
  userSubjet = new Subject<User[]>();

  emitUsers() {
    this.userSubjet.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
