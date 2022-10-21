<template>
<div id= "comp-list">
<h1>This is a list of Componenet </h1>
<ul>
<li class="item" v-for= "compo in compoArray" :key="compo.id">
<span class="id"> <b>Id:</b> {{compo.id}} </span><br/>
<span class="msg"> <b>Msg description:</b> {{compo.msg}} </span>
</li>
</ul>
</div>
</template>

<script>
export default {
  name: "compoList",
props:   ["compoArray"],
data:()=>{
    return{
  }},
 };
</script>

<style scoped>
h1 {
  font-size: 20px ;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.item{
background: rgb(47, 255, 141);
margin-bottom: 5px;
padding: 3px 5px;
}
#comp-list{
background: #6e8b97;
box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
margin-bottom: 30px;
padding: 10px 20px;
}
#comp-list ul{
padding: 0;
}
#comp-list-one li{
display: inline-block;
margin-right: 10px;
margin-top: 10px;
padding: 20px;
background: rgba(255,255,255,0.7);
}
</style>