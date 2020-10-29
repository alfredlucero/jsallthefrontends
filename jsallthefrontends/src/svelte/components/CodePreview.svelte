<script>
</script>

<div class="flex flex-col lg:flex-row lg:max-h-screen">
  <div
    class="rounded-t-md lg:rounded-tl-md lg:rounded-bl-md lg:rounded-tr-none bg-blue-100 py-6 px-4 flex-1 flex justify-center items-center overflow-auto">
    <div class="w-5/6 max-h-full">
      <slot name="preview">
        <!-- Preview Component goes here -->
      </slot>
    </div>
  </div>
  <div class="flex-1 w-full lg:w-1/2 overflow-auto">
    <slot name="code">
      <!-- Code Component goes here -->
    </slot>
  </div>
</div>
