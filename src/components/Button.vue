
<template>
   <button @click="onClick()" :style="{background:color}">{{text}}</button>
  </template>

<script>
  export default{
   name:"button",
   props:{
     text:String,
     color:String
   },
   methods:{
     onClick(){
       this.$emit("show-form-toggle");
     }
   }
  }
</script>

<style scoped>
  button{
   background:#52ac39;
   color:#fff;
   padding:10px;
   border-radius:3px;
   border:none;
   font-weight:800
  }
</style>
