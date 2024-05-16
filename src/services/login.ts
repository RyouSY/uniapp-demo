import { http } from '@/utils/http'

type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}

export const loginApi = (data: LoginParams) => {
  return http({
    url: '/login/wxMix',
    method: 'POST',
    data
  })
}

export const loginSimpleApi = (phoneNumber: string) => {
  return http({
    url: '/login/wxMin/simple',
    method: 'POST',
    data: {
      phoneNumber
    }
  })
}

