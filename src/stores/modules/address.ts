import { defineStore } from "pinia";
import type { AddressItem } from "@/types/address";
import { ref } from "vue";

export const useAddressStore = defineStore('address', () => {
  const selectedAddress = ref<AddressItem>()

  const onChangeSelectAddress = (val: AddressItem) => {
    selectedAddress.value = val
  }

  return {
    onChangeSelectAddress,
    selectedAddress
  }

})
