<template>
    <ul class="tw-flex tw-flex-col tw-p-4 tw-gap-4">
        <li v-for="(route, index) in $router.options.routes" :key="index" class="tw-font-bold tw-text-base ">
            <span class="tw-text-slate-700 hover:tw-text-slate-500">
                <NuxtLink :to="route.path" activeClass="tw-text-slate-500">{{ route.meta?.title ?? 'title' }}</NuxtLink>
            </span>
        </li>
        <!-- {{ $router.options.routes }} -->
    </ul>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>