import axios from "axios";
export const useMainStore = defineStore("mainStore", {
    state: () => {
        return{
            // base_url: "https://hapi.fhir.org/baseR4/",
        }
    },
    getters:{
        // doubleCount: (state) => state.count * 2,
    },
    actions:{}
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
  }