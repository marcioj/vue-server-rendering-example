<template>
  <div>
    <h1>TODOS</h1>
    <input autofocus type="text" @keyup.enter="add($event.target.value); $event.target.value = ''">
    <ul>
      <li v-for="todo in filteredTodos">
        {{todo.name}}
        <input type="checkbox" v-model="todo.checked">
      </li>
    </ul>
    <div>
      <span>{{itemsLeft}} items left</span>
      <span>
        <label>
          All
          <input v-model="filter" name="filter" type="radio" value="all" />
        </label>
        <label>
          Active
          <input v-model="filter" name="filter" type="radio" value="active"/>
        </label>
        <label>
          Completed
          <input v-model="filter" name="filter" type="radio" value="completed"/>
        </label>
      </span>
      <a href="#" @click="clearChecked()">Clear completed</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    filteredTodos() {
      if (this.filter === 'all') return this.todos;

      return this.todos.filter(todo => {
        switch (this.filter) {
          case 'active': return !todo.checked;
          case 'completed': return todo.checked;
        }
      });
    },
    itemsLeft() {
      return this.todos.filter(todo => !todo.checked).length;
    }
  },
  methods: {
   add(name) {
     this.todos.push({ name, checked: false });
   },
   clearChecked() {
     this.todos = this.todos.filter(todo => !todo.checked);
   }
  },
  data () {
    return {
      filter: 'all',
      todos: [
        { name: 'Comprar pão!', checked: false },
        { name: 'Pedir pizza', checked: true },
        { name: 'Terminar todo', checked: false }
      ]
    }
  }
}
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>
