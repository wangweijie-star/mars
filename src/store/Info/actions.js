import { userinfoApi } from '../../utils/api'
export default {
  async getMyInforApi ({ commit }, payload) {
    const res = await userinfoApi({
      token: payload.token
    })
    commit('getDetailInfo', res.result)
  }
}
