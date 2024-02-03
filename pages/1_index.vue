<template>
    <div class="tw-flex tw-flex-col tw-gap-4">
        <h2 class="tw-text-2xl tw-font-bold">Introduction</h2>
        <section class="tw-flex tw-flex-col tw-gap-2">
            <span>
                This project used for upload FHIR JSON data based on
                <a href="https://mos2718.github.io/login/list.html"
                    class="tw-text-blue-700">https://mos2718.github.io/login/list.html</a>
            </span>
        </section>
        <section class="tw-flex tw-flex-col tw-gap-2">
            <h4 class="tw-text-lg tw-font-bold">Scenario:</h4>
            <span>
                Upload some example resource for Organization, Practitioner, & PractitionerRole. This scenario will be used
                for communication between patient and PIC/Admin staff in each department.
            </span>
        </section>
        <section class="tw-flex tw-flex-col tw-gap-2">
            <h4 class="tw-text-lg tw-font-bold">Formulation of the problem:</h4>
            <span>
                In Indonesia many patients call to contact center to reach the doctor, from this problem we want to simplify
                the task from the patient without reach the contact center we destruct the contact center into several
                department call center.
            </span>
        </section>
        <section class="tw-flex tw-flex-col tw-gap-2">
            <h4 class="tw-text-lg tw-font-bold">Organization Structur Example:</h4>
            <span>
                This image is taken from
                <a href="https://satusehat.kemkes.go.id/platform/docs/id/fhir/resources/organization/"
                    class="tw-text-blue-700">
                    Satu Sehat Organization Structure Example
                </a>.
            </span>
            <figure class="tw-flex tw-items-center tw-justify-center tw-flex-col tw-gap-2">
                <img :src="getImage('images/contoh-struktur-organisasi.svg')" />
                <figcaption>Fig 1. Satu Sehat Organization Structure Example</figcaption>
            </figure>
        </section>
    </div>
</template>

<script setup>
definePageMeta({
    name: "home",
    title: "Home",
    path: "/"
})
</script>

<style lang="scss" scoped></style>