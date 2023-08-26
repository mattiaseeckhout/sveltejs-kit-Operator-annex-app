<script>
    import ferro_1 from '$lib/data/ferro1.json';
    export let table="undefined";
    let myJson = table

</script>


<main>
    <fieldset><legend>{table}</legend>
        <table>
            <tr>
            <th style="width:25%">Datum</th>
            <th style="width:25%">Uur</th>
            <th style="width:25%">Gewicht</th>
            </tr>
            
            {#each ferro_1 as item}
                <tr>
                <td>{item.datum}</td>
                <td>{item.uur}</td>
                <td>{item.gewicht}</td>
                </tr>
            {/each}
            
        </table>
        
    </fieldset>
</main>


<style>
legend {
    font-size:20px;
}

table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}

</style>