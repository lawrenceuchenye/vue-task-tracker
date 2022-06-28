import {createRouter,createWebHistory} from "vue-router"

import AboutView from "../views/About"
import HomeView from "../views/Home"


const routes=[
{
    path:"/",
    name:"home-view",
    component:HomeView
   },
  {
    path:"/about",
    name:"about-view",
    component:AboutView
   }
];
	
const router=createRouter({
     history:createWebHistory(""),
     routes
});


export default router
