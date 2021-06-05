
interface IAuthenticate {
  access_token: string,
  refresh_token: string
}

class AuthenticateModel {
  access_token = ''
  refresh_token = ''

  static map(data: IAuthenticate): AuthenticateModel {
    const authenticateTYpe = new AuthenticateModel(data)
    return authenticateTYpe
  }

  constructor(data?: IAuthenticate) {
    if (data) {
      this.init(data)
    }
  }


  init = (data: IAuthenticate) => {
    this.access_token = data.access_token
    this.refresh_token = data.refresh_token
  }
}

export { AuthenticateModel, IAuthenticate }