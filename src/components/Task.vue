<template>
   <div :class="[ task.reminder ? 'reminder' : ' ','task']">
     <div class="info">
       <h4>{{task.text}}</h4>
       <p>{{task.date}}</p>
      </div>
      <Button @click="deleteTask(task.id)"  text="x" color="red"/>
    </div>
  </template>

<script>
  import Button from "./Button.vue"

  export default{
   name:"Task",
   props:{
    task:Object
   },
   components:{
    Button
   },
   methods:{
    deleteTask(id){
     this.$emit("delete-task",id);
    }
   }
  }
 </script>

<style scoped>
  .task{
    background:rgba(0,0,0,0.05);
    margin-top:5px;margin-bottom:5px;
    padding:10px;
    border-radius:3px;
    display:flex;
    justify-content:space-between;
   }

   .task p{
      margin-top:3px;
     }

   .reminder{
      border-left:5px solid blue;
    }
  </style>
