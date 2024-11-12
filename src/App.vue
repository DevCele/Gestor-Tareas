<template>
  <div>
    <nav class="navbar navbar-expand-xl navbar-dark bg-dark" aria-label="Navbar Todo App">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Todo App</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarContent">
          <!-- Enlaces de Navegación -->
          <ul class="navbar-nav me-auto mb-2 mb-xl-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active" exact>Añadir Tareas</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/todos" class="nav-link" active-class="active">Lista de Tareas</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/combined" class="nav-link" active-class="active">Vista Combinada</router-link>
            </li>
            
          </ul>
          <!-- Barra de Búsqueda -->
        </div>
      </div>
    </nav>

    <!-- Contenido de las rutas con transición -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Transición suave para el cambio de vistas */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Estilo de enlaces de navegación */
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-link {
  font-weight: 500;
  color: #ffffffcc !important;
  transition: color 0.3s ease;
}

.nav-link.active, .nav-link:hover {
  color: #ffffff !important;
}

.dropdown-menu {
  background-color: #343a40;
}

.dropdown-item:hover {
  background-color: #495057;
}

/* Estilo para el botón de búsqueda */
.btn-outline-light {
  color: #ffffffcc;
  border-color: #ffffffcc;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.btn-outline-light:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
