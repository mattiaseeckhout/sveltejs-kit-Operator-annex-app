<!-- AddDataForm.svelte -->

<script>
  let uur,gewicht;
  let uu, min, sec;
  let dd, mm, yy;

  let d = new Date();
  uu = d.getHours();
  min = d.getMinutes();
  sec= d.getSeconds();
  dd = d.getDate();
  mm = d.getMonth();
  yy = d.getFullYear();
  


  async function handleSubmit() {
    const newData = {
      gewicht
    };

    const response = await fetch('src/routes/api/addData.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    if (response.ok) {
      // Data added successfully, you might want to show a success message or refresh the data list
      console.log('Data added successfully');
    } else {
      // Handle the error if saving data fails
      console.error('Failed to add data');
    }
  }
</script>

<!--  -->

<fieldset><legend>Invoer</legend>
  <form class = "blok" on:submit|preventDefault={handleSubmit}>
    <label>Datum:{dd}/{mm}/{yy}</label><br>
    <label>Uur:{uu}:{min}</label><br><br>
    <select id="cars">
      <option value="ferro 1">ferro 1</option>
      <option value="Al+Cu">Al+Cu</option>
      <option value="Zn+Pb+Inox">Zn+Pb+Inox</option>
      <option value="Non-Ferro Bodemas">Non-Ferro Bodemas</option>
      <option value="ferro 2 2vo">ferro 2</option>
    </select><br><br>
    <label>
      <input type="text" size="10" bind:value={gewicht} required />Kg
    </label><br><br>
    <button type="submit">Toevoegen</button>
  </form>
</fieldset>

<style>

label{
  font-size: 19px;
}
legend{
  font-size: 19px;
}

</style>