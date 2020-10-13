<script>
  let name = "world";

  let a = 1;
  let b = 2;

  let yes = false;

  let scoops = 1;
  let flavours = ["Mint choc chip"];
  let menu = ["Cookies and cream", "Mint choc chip", "Raspberry ripple"];

  let textareaValue = "";

  let questions = [
    { id: 1, text: `Where did you go to school?` },
    { id: 2, text: `What is your mother's name?` },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`,
    },
  ];
  let selected;
</script>

<input bind:value={name} />

<h1>Hello {name}!</h1>

<p>Autoconverts string values in inputs to numbers</p>
<label>
  <input type="number" bind:value={a} min="0" max="10" />
  <input type="range" bind:value={b} min="0" max="10" />
</label>

<label>Checkbox <input type="checkbox" bind:checked={yes} /> </label>

<h2>Size</h2>

<label> <input type="radio" bind:group={scoops} value={1} /> One scoop </label>

<label> <input type="radio" bind:group={scoops} value={2} /> Two scoops </label>

<label>
  <input type="radio" bind:group={scoops} value={3} />
  Three scoops
</label>

<h2>Flavours</h2>

{#each menu as flavour}
  <label>
    <input type="checkbox" bind:group={flavours} value={flavour} />
    {flavour}
  </label>
{/each}

<div><textarea bind:value={textareaValue} /></div>

<select bind:value={selected}>
  {#each questions as question}
    <option value={question}>{question.text}</option>
  {/each}
</select>
