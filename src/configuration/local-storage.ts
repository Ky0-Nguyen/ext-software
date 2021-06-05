import { IAuthenticate } from '@models/authentication'
import AsyncStorage from '@react-native-community/async-storage'

class LocalStorages {

  token: IAuthenticate = { access_token: '', refresh_token: '' }

  get settingKey(): string {
    return 'ExtSoftware'
  }

  private save = async () => {
    let jsonString = ''
    jsonString = JSON.stringify(this)
    await AsyncStorage.setItem(this.settingKey, jsonString)
  }

  public load = async () => {
    const jsonString = await AsyncStorage.getItem(this.settingKey)
    const jsonObject = jsonString ? JSON.parse(jsonString) : ''
    Object.assign(this, jsonObject)
  }

  public saveToken = async (token: IAuthenticate) => {
    this.token = token
    await this.save()
  }
}

const instance = new LocalStorages()
export { instance as localStorage }