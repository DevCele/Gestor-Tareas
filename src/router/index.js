import { createRouter, createWebHistory } from 'vue-router';
import AddTodo from '../views/AddTodo.vue';
import Todos from '../views/Todos.vue';
import CombinedTodos from '../views/CombinedTodos.vue';

const routes = [
    { path: '/', component: AddTodo, name: 'AddTodo' },
    { path: '/todos', component: Todos, name: 'Todos' },
    { path: '/combined', component: CombinedTodos, name: 'CombinedTodos' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
