<template>
<div class="comp">
    <!-- <h1> This is a new component </h1> -->
    <h2> {{'Props: ' + msg}} </h2>
    <h3> {{'Data: ' + HiText}} </h3>
    <button id="example" v-on:click="sayHi">Say Hi</button>
</div> 
</template>
<script>
export default {
        name: "newCompo",
        props:{
            msg: {type: String, required: true, defult: 'no props were passed',
            /* validator: (value) => {/^[a-zA-Z]+$/.test(value)}, */
            /* validator: (value) => {return value == ''},  */
            validator: (value) => {return value != ''}, 
        }},
    data:()=>{
    return{
    HiText: "We are learning Vue",
    isAvailable: Boolean,
    objArray : [
    {id: 1, name: 'name1', type: 'type1', description: 'description1'},
    {id: 2, name: 'name2', type: 'type2', description: 'description2'},
    {id: 3, name: 'name3', type: 'type3', description: 'description3'},
    ],
    }},
    methods: {
    sayHi: function (event) {
      // `this` inside methods point to the Vue instance
    alert('Hello ' + this.HiText + '!')
    },},
    created(){
    console.log('The component is created')
    },
    mounted(){
    console.log('The component is mounted')
    },
    updated(){
    console.log('The component is updated')
    },
    unmounted(){
    console.log('The component is unmounted')
    },
    destroyed(){
    console.log('The component is destroyed')
    },
}
</script>

<style scoped>
/* Add "scoped" attribute to limit CSS to this component only */
h2 {
    color: green;
}
</style>