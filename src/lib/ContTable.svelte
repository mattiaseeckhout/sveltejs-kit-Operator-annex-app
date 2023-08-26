<script>
  import Container from "$lib/Containertabel.svelte";
  import AddDataForm from "$lib/AddDataForm.svelte";
</script>

<div class="flex-container">
  <div><AddDataForm /></div>
  <div><Container table={"ferro_1"} /></div>
  <div><Container table={"Al+Cu"} /></div>
  <div><Container table={"Zn+Pb+Inox"} /></div>
  <div><Container table={"Non-Ferro Bodemas"} /></div>
  <div><Container table={"ferro_2"} /></div>
</div>

<style>
  .flex-container {
    position: relative;
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap to a new row on smaller screens */
    width: 100%;
    max-height: calc(90vh - 100px); /* Adjust the height to fit the content */
    overflow-y: auto; /* Enable vertical scrolling */
    
  }

  .flex-container > div {
    background-color: 0,0,0,0;
    width: calc(14% - 20px); /* Adjust the width of each table container, you can change this value based on your preference */
    margin: 10px;
    padding: 20px;
    font-size: 30px;
  }

  @media screen and (max-width: 768px) {
    .flex-container > div {
      width: calc(50% - 20px); /* Adjust the width of each table container for smaller screens */
    }
  }
</style>
