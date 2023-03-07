<template>
    <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
        <div class="uk-offcanvas-bar">

            <button class="uk-offcanvas-close" type="button" uk-close></button>

            <h3 class="relative">
                {{ fullName }}
                <br>
                <span class="text-gray-400 text-sm absolute">payment_id: {{ paymentId }}</span>
            </h3>

            <div class="mt-9 w-full">
                <div class="flex justify-between border-b py-2 mt-3">
                    <div class="text-gray-400">
                        <span class="uk-margin-small-right" uk-icon="icon: file-text"></span>
                        ចំនួនទឹកប្រាក់
                    </div>
                    <span>{{ amount }} {{ currency }}</span>
                </div>
                <div class="flex justify-between border-b py-2">
                    <div class="text-gray-400 flex items-center">
                        <span class="uk-margin-small-right" uk-icon="icon: credit-card"></span>
                        បង់ប្រាក់
                    </div>
                    <span>{{ paybay }}</span>
                </div>
                <div class="flex justify-between border-b py-2">
                    <div class="text-gray-400">
                        <span class="uk-margin-small-right" uk-icon="icon: user"></span>
                        ភ្ញៀវខាង
                    </div>
                    <span>{{ guestOf }}</span>
                </div>
                <div class="flex justify-between border-b py-2">
                    <div class="text-gray-400">
                        <span class="uk-margin-small-right" uk-icon="icon: calendar"></span>
                        ថ្ងៃទី/ខែ/ឆ្នាំ ម៉ោង
                    </div>
                    <span>{{ data_time }}</span>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'FlibModifierDetail',
    props: ['data'],
    computed: {
        fullName() {
            return this.data && this.data.last_name + ' ' + this.data.first_name
        },
        paymentId() {
            return this.data && '#' + this.data.id
        },
        guestOf() {
            return this.data && this.data.guest_of == "M" ? 'ប្រុស' : 'ស្រី'
        },
        currency() {
            return this.data && this.data.currency  === "USD" ? "ដុល្លារ" : "រៀល"
        },
        amount() {
            return this.data && this.data.amount
        },
        paybay() {
            return this.data && !!this.data.pay_by ? 'ផ្ទាល់' : 'ABA'
        }, 
        data_time() {
            return this.data && this.data.date.toString() + this.data.time.toString()
        }
    }
}
</script>
<style scoped>
.uk-offcanvas-bar {
    background-color: #fff;
    color: #666 !important;
}
.uk-offcanvas-bar h3 {
    color: #00A5FF !important;
}
.uk-offcanvas-bar .uk-close {
    color: #666;
}
</style>