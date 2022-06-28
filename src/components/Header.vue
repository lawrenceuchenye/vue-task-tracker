<template>
  <header>
     <h1>{{title}}</h1>
      <Button @show-form-toggle="$emit('show-form-toggle')"  :text="showTaskForm ? 'Close' : 'Add Task'" :color="showTaskForm ? 'red' : 'green'"  />
   </header>
 </template>

<script>
  import Button from "./Button.vue"
  export default{
    name:"Header",
    props:{
       title:{
         type:String,
         default:"Hello Vue!"
       },
       showTaskForm:Boolean
    },
    components:{
     Button
    }
 }
</script>

<style scoped>
  header{
   display:flex;
   justify-content:space-between;
   padding:10px;
  }

  header h1{
   font-weight:800;
  }
</style>
