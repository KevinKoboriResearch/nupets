<template>
    <div class="loading">
        <img src="@/assets/dog-loading.gif" alt="Loading">
    </div>
</template>

<script>
export default {
    name: 'Loading'
}
</script>

<style>
    .loading {
        grid-area: content;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;
        background-color: #f4faff;
    }
</style>