<template>
    <nav class="uk-navbar uk-navbar-container uk-margin px-6 fixed top-0 h-fit" uk-navbar>
        <div class="uk-navbar-left">
            <a class="uk-navbar-toggle uk-navbar-toggle-animate" uk-navbar-toggle-icon href="#"></a>
            <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li class="uk-active"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'TheNavBar'
}
</script>