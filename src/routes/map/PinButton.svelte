<script>
	import { MapPinAltSolid } from 'flowbite-svelte-icons';

	export let color = 'primary';
	export let onclick = () => {};
</script>

<MapPinAltSolid 
	on:click={onclick}
	class="m-2 w-5 h-5 text-{color}-500 
	transition duration-75"
/>
