import dev from './env-configs/dev'
import prod from './env-configs/prod'
import { localStorage } from './local-storage'

const config = {
  dev,
  prod,
}

enum ENVIRONMENT {
  DEV = 'dev',
  PROD = 'prod'
}

class Configurations {
  public hasInitialized = false

  public config: any

  public env: ENVIRONMENT = ENVIRONMENT.PROD

  public async initialize(): Promise<void> {
    const env = __DEV__ ? ENVIRONMENT.DEV : ENVIRONMENT.PROD
    if (!this.hasInitialized) {
      await localStorage.load()
      this.config = config[env]
      this.env = env
      this.hasInitialized = true
    }
  }
}

const instance = new Configurations()
export { instance as Configuration, ENVIRONMENT }