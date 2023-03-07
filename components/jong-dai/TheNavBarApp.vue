<template>
    <div class="grid grid-cols-6 relative">
        <div class="uk-card-body col-span-1 bg-white min-h-screen border-r-2 border-secondary">
            <ul class="uk-nav-default" uk-nav>
                <li class="w-full"><h1 class="text-primary font-extrabold outline-dashed text-2xl w-fit mx-auto">App Logo</h1></li>
                <li class="w-full mt-8"><NuxtLink to="/"><span class="uk-margin-small-right" uk-icon="icon: home"></span>Home</NuxtLink></li>
                <li class="w-full mt-3"><NuxtLink to="/participate"><span class="uk-margin-small-right" uk-icon="icon: users"></span>Participators</NuxtLink></li>
            </ul>
        </div>
        <nav class="uk-navbar-container col-span-5 h-fit">
            <div class="uk-container">
                <div uk-navbar="target: !.uk-navbar; align: center">
                    <div class="uk-navbar-left p-0 h-fit mt-[20px]">
                        <TheSearchBar />
                    </div>
                    <div class="uk-navbar-right p-0 h-fit">
                        <ul class="uk-navbar-nav">
                            <li>
                                <a href="#">
                                    <span class="uk-margin-small-right" uk-icon="icon: bell"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="users" class="w-10 h-10">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div class="absolute w-5/6 right-0 top-20 overflow-y-auto max-h-[90vh]">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import TheSearchBar from './TheSearch.vue';
export default {
  name: 'TheNavBarApp',
  components: {
    TheSearchBar
  }
}
</script>
<style>
.nuxt-link-active {
    background: #00A5FF;
    width: 98%;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
}
.uk-nav-default > li > a.nuxt-link-active {
    color: #fff;
}
.uk-navbar-container:not(.uk-navbar-transparent) {
    background: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    z-index: 100;
}
</style>