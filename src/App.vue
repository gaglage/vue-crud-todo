<template>
  <div id="app">
    <b-container>
      <b-nav tabs>
        <b-nav-item
          exact
          to="/todos"
        >Listado de todos</b-nav-item>
        <b-nav-item
          exact
          to="/todos/create"
        >formulario de alta de todos</b-nav-item>
      </b-nav>
      <router-view/>
    </b-container>
  </div>
</template>
