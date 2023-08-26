<script>
  import Clock from "$lib/Clock.svelte";
  import Nav  from '$lib/Nav.svelte';

</script>
<Nav/>
<div>
  <div class="flex-container">
    <div><h1>Under construction.</h1></div>
    
    <div class = "r"><Clock/></div>
  </div>   
</div>

<style>
  .flex-container {
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap to a new row on smaller screens */
    width: 100%;
    max-height: calc(90vh - 100px); /* Adjust the height to fit the content */
    overflow-y: auto; /* Enable vertical scrolling */
    z-index: 1;
  }

  .flex-container > div {
    /*background-color: white;*/
    width: calc(48% - 20px); /* Adjust the width of each table container, you can change this value based on your preference */
    margin: 3px;
    padding: 5px;
    padding-left: 30px;
    font-size: 16px;
    
  }

  @media screen and (max-width: 768px) {
    .flex-container > div {
      width: calc(50% - 20px); /* Adjust the width of each table container for smaller screens */
      z-index: 1;
    }
  }

  .r{
    text-align:right;
    z-index: 1;
  }
  div{
    background-color: #209CEE;
    z-index: 1;
	  color: white;
  }
</style>
