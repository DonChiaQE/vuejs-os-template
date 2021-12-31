<template>
<div class="grid">
    <img src="https://source.unsplash.com/800x800/" />
    <img src="https://source.unsplash.com/1200x800" />
    <img src="https://source.unsplash.com/800x1600" />
    <img src="https://source.unsplash.com/1800x500" />
    <img src="https://source.unsplash.com/700x1500" />
    <img src="https://source.unsplash.com/600x600/" />
    <img src="https://source.unsplash.com/480x500" />
    <img src="https://source.unsplash.com/600x800" />
    <img src="https://source.unsplash.com/900x800" />
    <img src="https://source.unsplash.com/500x750" />
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
