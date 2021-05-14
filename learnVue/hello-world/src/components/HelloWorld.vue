<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>counter: {{ counter }}</p>
    <p>{{ greeting }}</p>
    <span v-bind:title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound
      title!
    </span>
    <button v-on:click="reverseGreeting">Reverse Greeting</button>
    <input type="text" v-model="greeting">
    <ol>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.text }}
      </li>
    </ol>
    <div>
      <p v-if="seen">Now you see me</p>
      <button v-on:click="handleSeen">toggle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    todos: Array,
  },
  data() {
    return {
      counter: 0,
      message: 'hello Vue.js',
      greeting: 'good afternoon!',
      seen: true,
      // todos: [
      //   { text: 'Learn JavaScript' },
      //   { text: 'Learn Vue' },
      //   { text: 'Build something awesome' }
      // ]
    };
  },
  methods: {
    reverseGreeting(){
      this.greeting = this.greeting.split("").reverse().join("");
    },
    handleSeen(){
      this.seen = !this.seen;
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
