<template>
    <div class="tw-flex tw-flex-col tw-gap-4">
        <h2 class="tw-text-2xl tw-font-bold">FHIR Resource - POST</h2>
        <section class="tw-flex tw-flex-col tw-gap-4">
            <h4 class="tw-text-lg tw-font-bold">Step 1. Setup URL & Select Resource Type</h4>
            <div class="tw-flex tw-flex-col tw-ml-4 tw-gap-2.5 tw-text-sm">
                <div class="tw-flex tw-items-center tw-gap-2">
                    <span>Base URL :</span>
                    <input type="text"
                        class="tw-border tw-border-slate-700 tw-rounded tw-px-1.5 tw-py-1 focus:tw-outline-none tw-w-1/3"
                        v-model="baseURL" />
                </div>
                <div class="tw-flex tw-items-center tw-gap-2">
                    <span>Select Resource :</span>
                    <select v-model="selectResource"
                        class="tw-border tw-border-slate-700 tw-rounded tw-px-1.5 tw-py-1 focus:tw-outline-none">
                        <option v-for="(opt, index) in selectOptions" :key="index">{{ opt }}</option>
                    </select>
                </div>
            </div>
        </section>
        <section class="tw-flex tw-flex-col tw-gap-4">
            <h4 class="tw-text-lg tw-font-bold">Step 2. Insert Request (Example)</h4>
            <div class="tw-flex tw-flex-col tw-ml-4 tw-gap-2.5 tw-text-sm">
                <textarea class="tw-border tw-border-slate-700 tw-rounded tw-p-2 focus:tw-outline-none"
                    placeholder="Paste FHIR Resource" v-model="textareaData" rows="10"></textarea>
            </div>
        </section>
        <section class="tw-flex tw-flex-col tw-gap-4">
            <h4 class="tw-text-lg tw-font-bold">Step 3. Post Data</h4>
            <div class="tw-flex tw-flex-col tw-ml-4 tw-gap-2.5 tw-text-sm">
                <button
                    class="tw-w-fit tw-py-2.5 tw-px-5 tw-bg-slate-700 tw-text-white tw-rounded tw-font-semibold tw-text-base"
                    @click="postData()">Post
                    Data</button>
            </div>
        </section>
        <section class="tw-flex tw-flex-col tw-gap-4">
            <h4 class="tw-text-lg tw-font-bold">Step 4. GET Return Value</h4>
            <div class="tw-flex tw-flex-col tw-ml-4 tw-gap-2.5 tw-text-sm">
                <textarea class="tw-border tw-border-slate-700 tw-rounded tw-p-2 focus:tw-outline-none"
                    placeholder="Keep resource ID,  if required." :value="textareaReturn" rows="10" cols="50">
                </textarea>
            </div>
        </section>
    </div>
</template>

<script setup>
import axios from 'axios'
definePageMeta({
    name: "UploadResource",
    title: "Upload Resource",
    path: "/upload_resource"
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

// textarea post data
const textareaData = ref("");

// textarea return value
const textareaReturn = ref();

const postData = async () => {
    const { data: responseData, error } = await useFetch(`${baseURL.value}/${selectResource.value}`, {
        method: 'post',
        body: JSON.parse(JSON.stringify(textareaData.value))
    })
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