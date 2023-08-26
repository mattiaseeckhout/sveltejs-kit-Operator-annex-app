<script>
  import { onMount } from 'svelte';

  let dd, yy, uu, min, sec;
  

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];

  // Create a Svelte store to hold the value of 'dag'
  import { writable } from 'svelte/store';
  const dag = writable('');
  const month = writable('');

  onMount(() => {
    // Update the 'dag' store every second with the current day name
    setInterval(() => {
      let now = new Date();
      dag.set(days[now.getDay()]);
      dd = now.getDate();
      month.set(months[now.getMonth()]);
      yy = now.getFullYear();
      uu = now.getHours();
      min = now.getMinutes();
      sec= now.getSeconds();
    }, 1000);
  });
</script>

<h1>{$dag} - {dd} - {$month} - {yy}</h1>
<h1>{uu}:{min}:{sec}</h1>

<style>
  /* Add your styles here if needed */
</style>
