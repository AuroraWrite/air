// 封装axios
import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
class HYrequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({ baseURL, timeout })
    this.instance.interceptors.response.use(
      (res) => {
        return res.data //拿到data之后的对象
      },
      (err) => {
        return err
      }
    )
  }
  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.request({ ...config, method: 'get' })
    // 在get方法里调用request
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}
// 导出以类的实例方式
export default new HYrequest(BASE_URL, TIMEOUT)
