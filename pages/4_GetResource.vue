<template>
    <div class="tw-flex tw-flex-col tw-gap-4">
        <h2 class="tw-text-2xl tw-font-bold">FHIR Resource - GET</h2>
        <section class="tw-flex tw-flex-col tw-gap-4">
            <h4 class="tw-text-lg tw-font-bold">Step 1. Setup URL</h4>
            <div class="tw-flex tw-flex-col tw-ml-4 tw-gap-2.5 tw-text-sm">
                <div class="tw-flex tw-items-center tw-gap-2">
                    <span>Base URL :</span>
                    <input type="text"
                        class="tw-border tw-border-slate-700 tw-rounded tw-px-1.5 tw-py-1 focus:tw-outline-none tw-w-1/3"
                        v-model="baseURL" />
                </div>
            </div>
        </section>
        <section class="tw-flex tw-flex-col tw-gap-4">
            <h4 class="tw-text-lg tw-font-bold">Step 2. Select Resource & add parameters (optional)</h4>
            <div class="tw-flex tw-flex-col tw-ml-4 tw-gap-2.5 tw-text-sm">
                <div class="tw-flex tw-items-center tw-gap-2">
                    <span>Select Resource :</span>
                    <select v-model="selectResource"
                        class="tw-border tw-border-slate-700 tw-rounded tw-px-1.5 tw-py-1 focus:tw-outline-none">
                        <option v-for="(opt, index) in selectOptions" :key="index">{{ opt }}</option>
                    </select>
                    <span>If nessary, add FHIR search parameters:</span>
                    <input type="text"
                        class="tw-border tw-border-slate-700 tw-rounded tw-px-1.5 tw-py-1 focus:tw-outline-none"
                        v-model="params" />
                </div>
            </div>
        </section>
        <section class="tw-flex tw-flex-col tw-gap-4">
            <h4 class="tw-text-lg tw-font-bold">Step 3. Create URL</h4>
            <div class="tw-flex tw-items-center tw-ml-4 tw-gap-2.5 tw-text-sm">
                <button
                    class="tw-w-fit tw-py-2.5 tw-px-5 tw-bg-slate-700 tw-text-white tw-rounded tw-font-semibold tw-text-base"
                    @click="createURL()">Create Full URL</button>
                <input type="text"
                    class="tw-border tw-border-slate-700 tw-rounded tw-py-2.5 tw-px-1.5 focus:tw-outline-none tw-w-1/2"
                    v-model="newCreatedURL" />
            </div>
        </section>
        <section class="tw-flex tw-flex-col tw-gap-4">
            <h4 class="tw-text-lg tw-font-bold">Step 4. Return Value</h4>
            <div class="tw-flex tw-flex-col tw-ml-4 tw-gap-2.5 tw-text-sm">
                <button
                    class="tw-w-fit tw-py-2.5 tw-px-5 tw-bg-slate-700 tw-text-white tw-rounded tw-font-semibold tw-text-base"
                    @click="getData()">Get
                    Data</button>
                <textarea class="tw-border tw-border-slate-700 tw-rounded tw-p-2 focus:tw-outline-none"
                    placeholder="Keep resource ID,  if required." :value="textareaReturn" rows="10">
                </textarea>
            </div>
        </section>
    </div>
</template>

<script setup>
import axios from 'axios'
definePageMeta({
    name: "GetResource",
    title: "GET Resource",
    path: "/get_resource"
})

// main store
const mainStore = useMainStore();

// base url
const baseURL = ref("https://hapi.fhir.org/baseR4/")

// select resource
const selectOptions = ref([
    "Patient",
    "Person",
    "Device",
    "Organization",
    "Questionnaire",
    "QuestionnaireResponse",
    "Condition",
    "Observation",
    "Encounter",
    "Media",
    "Practitioner",
    "PractitionerRole",
    "Appointment",
    "Location",
    "Schedule",
    "Slot",
    "ServiceRequest",
])
const selectResource = ref(selectOptions.value[0]);
const params = ref("")

// textarea return value
const textareaReturn = ref("");

// created url
const newCreatedURL = ref("");

const createURL = () => {
    newCreatedURL.value = baseURL.value + selectResource.value
    if (params.value) {
        newCreatedURL.value += "?" + params.value
    }
}

const getData = async () => {
    const { data: responseData, error } = await useFetch(`${newCreatedURL.value}`)
    // console.log(responseData.value)
    if (responseData.value) {
        textareaReturn.value = JSON.stringify(responseData.value, null, 4)
    }
    if (error.value) {
        textareaReturn.value = JSON.stringify(error.value.data, null, 4)
    }
}
</script>

<style lang="scss" scoped></style>