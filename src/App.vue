<template>
  <h1>Boodschappen</h1>
  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/create">Toevoegen</RouterLink></li>
    </ul>
  </nav>
  <RouterView />
</template>

<style>
  #app {
    background: #eee;
    color: #000;
    font-family: verdana, sans-serif;
    line-height: normal;
    padding: 1rem;
    text-align: left;
  }
</style>

<style scoped>
  h1 {
    font-size: 1rem;
    margin: 0 0 1rem;
  }
  nav {
    border: 1px solid #ccc;
    margin-bottom: 1rem;
  }
  nav ul {
    margin: .5rem 1rem;
    padding-left: 0;
  }
  nav li {
    display: inline;
  }
  nav li + li {
    margin-left: 1rem;
  }
</style>
