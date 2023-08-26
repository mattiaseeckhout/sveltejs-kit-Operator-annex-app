
<script>
  
	let table ;
	let weight;
	//let datum;→ huidige datum uit systemtijd.
	
	function bewaar(){
		
		let result = {table, weight};
		//alert ('container '+ {table}+' '+{weight}+' ingegeven.');
		//venster sluiten
		
		console.dir(result);
	}

</script>

<main>
	<fieldset><legend>Container invoer.</legend>
    
    <table >
      <tr>
        <td width="20%">
          <label for="container">container</label><br>
          <select class="myinput" name="container" id="container" bind:value={table}>
            <option value="Ferro 1">Ferro 1</option>
            <option value="Al+Cu">Al+Cu</option>
            <option value="Zn+Pb+Inox">Zn+Pb+Inox</option>
            <option value="Non-Ferro Bodemas">Non-Ferro Bodemas</option>
            <option value="Ferro 2">Ferro 2</option>
          </select>
        </td>

        <td width="5%"></td>
        
        <td width="20%">
          <label for="gewicht">Gewicht:</label><br>
          <input class="myinput" type="number" id="gewicht" name="gewicht" bind:value={weight}><br><br>
        </td>

        <td width="5%"></td>
          
        <td width="20%">
          <button type="button" on:click= {bewaar}>Opslaan</button>
        </td>

      </tr>
    </table>
  </fieldset>
    
		
  
	
</main>



<style>

</style>
