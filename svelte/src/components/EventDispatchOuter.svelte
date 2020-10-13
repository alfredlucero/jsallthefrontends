<script>
  import EventDispatchInner from "./EventDispatchInner.svelte";
</script>

<!-- Dispatched events don't bubble but must be forwarded up the chain -->
<EventDispatchInner on:message />
