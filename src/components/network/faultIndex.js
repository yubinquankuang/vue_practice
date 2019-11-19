import {request} from '@/axios/mAxios'

export const getStation = () => {
  return request({url: '/fault/station/'})
}

export const getFault = params => {
  return request({url: '/fault/device/', params: params})
}
