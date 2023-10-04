<script>
	import { Button } from 'flowbite-svelte';
    let clicked=false;
	/** @type {import('./$types').PageData} */
	export let data;

   
</script>

<div on:mousedown={() => {clicked=true;}} on:mouseup={() => {clicked=false;}}>
	<Button color={clicked ? "primary" : 'alternative'} >
        X
    </Button>
</div>
