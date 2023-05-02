import { environment } from 'src/environments/environment';

const base_url = environment.base_url;
export class User {
  constructor(
    public name: string,
    public email: string,
    public password?: string,
    public role?: string,
    public uid?: string,
    public googleToken?: boolean,
    public image?: string
  ) {}

  get getImage() {
    if (this.image?.includes('https')) {
      return this.image;
    }
    if (this.image) {
      return `${base_url}/upload/users/${this.image}`;
    }
    return `${base_url}/upload/users/no-image`;
  }
}
