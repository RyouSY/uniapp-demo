import { ref } from 'vue'
import type { XtxGuessInstance } from '@/types/component'

export const useGetGuessApi = () => {
  const guessRef = ref<XtxGuessInstance>()
  //自动加载数据
  const onScrolltolower = () => {
    guessRef.value?.getHomeGoodsGuessLikeData()
  }

  return {
    guessRef,
    onScrolltolower
  }
}
