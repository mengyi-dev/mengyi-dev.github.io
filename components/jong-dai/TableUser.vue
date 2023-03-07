<template>
    <div class="uk-overflow-auto uk-card uk-card-default uk-card-body rounded-lg m-2">
    <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
        <thead>
            <tr>
                <th class="uk-table-shrink"><input class="uk-checkbox" type="checkbox" aria-label="Checkbox"></th>
                <th class="uk-table-shrink uk-text-nowrap">នាមត្រកូល</th>
                <th class="uk-table-shrink uk-text-nowrap">នាមខ្លួន</th>
                <th class="uk-table-shrink uk-text-nowrap">ភ្ញៀវខាង</th>
                <th class="uk-table-shrink uk-text-nowrap">ចំនួនទឹកប្រាក់</th>
                <th class="uk-table-shrink uk-text-nowrap">បង់ប្រាក់</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(guest, i) in data" :key="i" uk-toggle="target: #offcanvas-flip" @click="setDataToShow(guest)">
                <td><input class="uk-checkbox" type="checkbox" aria-label="Checkbox"></td>
                <td class="uk-text-nowrap">{{ guest.last_name }}</td>
                <td class="uk-text-nowrap">{{ guest.first_name }}</td>
                <td class="uk-text-truncate">{{ guest.guest_of == "M" ? 'ប្រុស' : 'ស្រី' }}</td>
                <td class="uk-text-nowrap">{{ guest.amount }} {{guest.currency == 'USD' ? 'ដុល្លារ' : 'រៀល'}}</td>
                <td class="uk-text-nowrap">{{!!guest.pay_by ? 'ផ្ទាល់' : 'ABA'}}</td>
            </tr>
        </tbody>
    </table>
    <FlibModifierDetail :data="dataToShow" />
</div>
</template>
<script>
import FlibModifierDetail from './FlipModifier.vue';
export default {
    name: 'TableUser',
    props: ['data'],
    components: {FlibModifierDetail},
    data(){
        return {
            dataToShow: null
        }
    },
    methods: {
       setDataToShow(value){
            this.dataToShow = value
       } 
    },
    mounted(){
        console.log(this.data);
    }
}
</script>
<style>
.uk-table-hover tbody tr:hover {
    background: #00a6ff49;
}
</style>