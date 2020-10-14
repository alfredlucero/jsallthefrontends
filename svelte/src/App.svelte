<script>
  import Counter from "./components/Counter.svelte";
  import Props from "./components/Props.svelte";
  import Conditionals from "./components/Conditionals.svelte";
  import Loops from "./components/Loops.svelte";
  import Async from "./components/Async.svelte";
  import DomEvents from "./components/DomEvents.svelte";
  import EventDispatch from "./components/EventDispatch.svelte";
  import Binding from "./components/Binding.svelte";
  import TodoList from "./components/TodoList.svelte";
  import LifecycleMount from "./components/LifecycleMount.svelte";
  import CounterStore from "./components/CounterStore/CounterStore.svelte";
  import ReadStore from "./components/ReadStore/ReadStore.svelte";
  import CustomCounterStore from "./components/CustomCounterStore/CustomCounterStore.svelte";
  import BindingStore from "./components/BindingStore/BindingStore.svelte";
  import MotionTweened from "./components/MotionTweened.svelte";
  import TransitionFade from "./components/TransitionFade.svelte";
  import AnimateTodoList from "./components/AnimateTodoList.svelte";
  import SlotBox from "./components/SlotBox.svelte";

  export let name;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <h2>Counter</h2>
  <Counter />
  <h2>Props</h2>
  <Props answer={42} />
  <h2>Conditionals</h2>
  <Conditionals />
  <h2>Loops</h2>
  <Loops />
  <h2>Async</h2>
  <Async />
  <h2>Dom Events</h2>
  <DomEvents />
  <h2>Event Dispatch</h2>
  <EventDispatch />
  <h2>Binding</h2>
  <Binding />
  <h2>TodoList</h2>
  <TodoList />
  <h2>Lifecycle onMount</h2>
  <LifecycleMount />
  <h2>Stores</h2>
  <h3>Write Store Counter</h3>
  <CounterStore />
  <h3>Read Store Time</h3>
  <ReadStore />
  <h3>Custom Store Counter</h3>
  <CustomCounterStore />
  <h3>Binding Store</h3>
  <BindingStore />
  <h2>Motion Tweened</h2>
  <MotionTweened />
  <h2>Transition Fade</h2>
  <TransitionFade />
  <h2>Animate Todo List</h2>
  <AnimateTodoList />
  <h2>Slots (children)</h2>
  <SlotBox>
    <h2>Hello!</h2>
    <p>This is a box. It can contain anything.</p>
  </SlotBox>
</main>
