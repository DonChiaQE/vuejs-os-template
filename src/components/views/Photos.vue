<template>
<div class="grid">
    <img src="https://i.imgur.com/uQilTqp.jpg" />

</div>
</template>

<style scoped>
.grid {
    column-count: 2;
    column-gap: 0.5em;
    margin-top: auto;
    margin-bottom: auto;
    padding: 20px;
}

img {
    background-color: #eee;
    display: inline-block;
    margin: 0 0 0.5em;
    width: 100%;
}

@media screen and (max-width: 600px) {
    .grid {
        column-count: 1;
    }
}
</style>
