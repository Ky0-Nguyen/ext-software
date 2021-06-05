import { AuthenticateModel } from './authentication'

class AppModel {
  public authentication: AuthenticateModel
  constructor() {
    this.authentication = new AuthenticateModel()
  }
}
const appModel = new AppModel()
export { appModel, AppModel }