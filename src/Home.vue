<template>
  <div class="container">
    <div class="main">
       <Header @show-form-toggle="Toggle" :showTaskForm="isVisible" title="Task Tracker" />
       <div v-show="isVisible">
         <Form @add-task="addTask"/>
        </div>
       <Tasks @toggle-reminder="reminderToggle"  @delete-task="deleteTask" :tasks="tasks" />
       <Footer />
     </div>
  </div>
</template>

<script>
import Header from "./components/Header"
import Tasks from "./components/Tasks.vue"
import Form from "./components/Form.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    Form,
    Footer
  },
  data(){
     return{
      tasks:[],
      isVisible:false
     }
   },
   methods:{
    async deleteTask(id){
      if(confirm("Are you sure?")){
         const res=await fetch(`http://localhost:3000/tasks/${id}/`,{
         method:"DELETE",
        });
        alert(res.status);
    
        if(res.status==200){
           this.tasks=this.tasks.filter((task)=> task.id !== id);
        }else{
          alert("Error");
        }
      }
    },
    reminderToggle(id){
     this.tasks=this.tasks.map((task)=> task.id === id ? {...task,reminder:!task.reminder}:task);
    },
    Toggle(){
      this.isVisible=!this.isVisible;
    },
    async addTask(task){
     const res=await fetch("http://localhost:3000/tasks",{
       method:"POST",
       headers:{
        "Content-Type":"application/json"
       },
       body:JSON.stringify(task)
     });
     const data=await res.json();

     this.tasks=[...this.tasks,data];
    },
    async getDB(){
     const res=await fetch("http://localhost:3000/tasks");
     const data=await res.json();
     return data;
    }
   },
  async  created(){
     this.tasks=await this.getDB();
   }
}
</script>

<style>
*{
  margin:0;padding:0px;
}

.container{
  display:flex;
  justify-content:center;
  align-items:center;
  width:600px;
  height:100vh;
}

.main{
  border-radius:2px;
  padding:20px;
  width:100%;
  box-shadow:0 0 5px grey;
  margin:10px;
}
</style>
