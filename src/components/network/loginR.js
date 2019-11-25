import {request} from '@/axios/mAxios'

export const login = data => {
  return request({url: '/login/', data: data, method: 'post'})
}
