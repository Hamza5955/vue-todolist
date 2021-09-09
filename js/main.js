Vue.config.devtools = true;

const app = new Vue({
  el: "#root",
  data: {
    add: "",
    listTodo: ["fare i compiti", "fare il bucato", "fare la spesa"],
  },
  methods: {
    addTodo() {
      if (this.add == "") {
        alert("Inserisci un lista");
      } else {
        this.listTodo.push(this.add);
        this.add = "";
      }
    },
    removeTodo(index) {
      this.listTodo.splice(index, 1);
    },
    aggingoA() {
      this.listTodo.push(this.add);
      this.add = "";
    },
  },
});
