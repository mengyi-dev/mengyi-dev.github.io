<template>
    <div class="uk-margin">
        <form class="uk-search uk-search-default">
            <a href="" uk-search-icon></a>
            <input class="uk-search-input" type="search" placeholder="Search" aria-label="Search">
        </form>
    </div>
</template>
<script>

export default {
    name: 'TheSearchBar'
}
</script>
<style>
.uk-search-input::placeholder {
    font-size: small;
}
.uk-search-input {
    outline-color: #00A5FF;
}
</style>