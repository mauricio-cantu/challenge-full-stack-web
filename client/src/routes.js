import Index from "./components/Index.vue";
import Create from "./components/Create.vue";
import Edit from "./components/Edit.vue";

const routes = [
  {
    name: "Create",
    path: "/create",
    component: Create,
  },
  {
    name: "Edit",
    path: "/edit",
    component: Edit,
  },
  {
    name: "Index",
    path: "/",
    component: Index,
  },
];

export default routes;
