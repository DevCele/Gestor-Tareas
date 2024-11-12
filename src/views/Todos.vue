<template>
  <div class="container my-5">
    <h2 class="text-center display-4 mb-4">Lista de Tareas (API)</h2>

    <!-- Listado de Tareas -->
    <div class="list-group">
      <div
        v-for="todo in todos"
        :key="todo.id"
        class="list-group-item d-flex justify-content-between align-items-center p-4 border rounded shadow-sm mb-3"
        :class="{'list-group-item-success': todo.completed}"
      >
        <!-- Texto de Tarea -->
        <span
          :class="{'text-decoration-line-through text-muted': todo.completed}"
          class="fs-5"
        >
          {{ todo.todo }}
        </span>

        <!-- Botones de Acción -->
        <div class="btn-group">
          <button
            @click="toggleComplete(todo)"
            class="btn btn-outline-success btn-lg"
            :title="todo.completed ? 'Marcar como pendiente' : 'Marcar como completada'"
          >
            <i class="bi" :class="todo.completed ? 'bi-arrow-counterclockwise' : 'bi-check-circle'"></i>
          </button>
          <button
            @click="deleteTodo(todo.id)"
            class="btn btn-outline-danger btn-lg"
            title="Eliminar tarea"
          >
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: []
    };
  },
  async created() {
    // Cargar las tareas desde la API
    const response = await fetch('https://dummyjson.com/todos');
    const data = await response.json();
    this.todos = data.todos;
  },
  methods: {
    toggleComplete(todo) {
      todo.completed = !todo.completed; // Cambia el estado de completado de la tarea
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id); // Elimina la tarea seleccionada
    }
  }
};
</script>

<style scoped>
/* Efecto de sombra suave para los elementos de la lista */
.list-group-item {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.list-group-item:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

/* Color y efecto de tachado para tareas completadas */
.text-decoration-line-through {
  color: #6c757d !important;
}

/* Estilo de fondo para tareas completadas */
.list-group-item-success {
  background-color: #e6f8e0 !important;
}

/* Estilo para los iconos */
.bi {
  font-size: 1.2rem;
}
</style>
