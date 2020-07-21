<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style>
    .content {
        grid-area: content;
        background-color: #D4D4F6;
        /* background-image: url( "../../assets/bg-blue-space.gif");
        background-size: cover; */
        /* background-attachment: fixed;
        background-position: center; */
        padding: 20px;
    }
    /* .content::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-image: url( "../../assets/bg-blue-space.gif");
        background-size: cover;
        filter: invert(100%) sepia(0%) saturate(100%) hue-rotate(300deg) brightness(50%) contrast(30%) grayscale(0%);
    } */
</style>
