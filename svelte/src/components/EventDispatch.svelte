<script>
  import EventDispatchOuter from "./EventDispatchOuter.svelte";

  function handleMessage(event) {
    alert(event.detail.text);
  }
</script>

<EventDispatchOuter on:message={handleMessage} />
