<template>
  <div>
   <form @submit="saveTask">
      <label>Task</label><br />
      <input type="text" name="task" v-model="task" placeholder="Task"/>
      <br /><label>Date</label><br />
      <input type="text" name="date" v-model="time" placeholder="Date & Time"/>
      <br /><label>Reminder</label>
      <input type="checkbox" name="Reminder" v-model="reminder"/><br />
      <button type="submit">Save Task</button>
    </form>
   </div>
 </template>

<script>
 export default{
   name:"Form",
   data(){
      return{
        task:"",
        time:"",
        reminder:false
       }
    },
   methods:{
     saveTask(e){
       e.preventDefault();
       
       if(!this.task){
         alert("Please add a task");
         return
       }

       const task={
        text:this.task,
        date:this.time,
        reminder:this.reminder
       };

       this.$emit("add-task",task);
       this.task="";
       this.time="";
       this.reminder=false;
     }
   }
 }
 </script>

<style scoped>
  label{
   font-weight:800;
   margin:10px;
   padding:5px;
  }

  input{
    width:80%;
    padding:10px;
    margin:10px;
   }

   input[type="checkbox"]{
    padding:0px;
    margin:0px;
    width:auto;
   }

  button{
   width:85%;
   paddong:10px;
   font-weight:800;
   border:none;
   border-radius:3px;
   color:#fff;
   background:#000;
   padding:10px;
   margin:10px;
   margin-bottom:20px;
  }

  form{
   display:block;
  }

  div{
    margin-left:50px;
  }
 </style>
