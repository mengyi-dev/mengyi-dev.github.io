<template>
    <div uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 1000">
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
            <ul class="uk-slideshow-items">
                <li>
                    <nuxt-img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" :placeholder="[100, 50, 10]" quality="80" alt="" uk-cover />
                    <div class="uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium">
                        <h3 class="uk-margin-remove">Left</h3>
                        <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </li>
                <li>
                    <nuxt-img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" :placeholder="[100, 50, 10]" quality="80" alt="" uk-cover />
                    <div class="uk-overlay uk-overlay-primary uk-position-left uk-text-center uk-transition-slide-left uk-width-medium">
                        <h3 class="uk-margin-remove">Left</h3>
                        <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </li>
            </ul>
            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
        </div>
        <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
    </div>
</template>

<script>
export default {
    name: 'TheSlideShow'
}
</script>