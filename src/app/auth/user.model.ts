export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpiratationDate: Date
  ){}

  // user.token = get token() => that ius why is private
  get token() {
    if (!this._tokenExpiratationDate || new Date() > this._tokenExpiratationDate) {
      return null;
    }
    return this._token;
  }
}