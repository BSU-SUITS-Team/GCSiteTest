<script>
	import { MapPinAltSolid } from 'flowbite-svelte-icons';

	export let color = 'primary';
	export let onclick = () => {};
	export let move = false;
</script>

<div>
	<MapPinAltSolid 
		on:click={onclick}
		class="m-2 w-5 h-5 text-{color}-500 
		transition duration-75"
		style="{move ? 'transform: translate3d(-95%, -150%, 0);' : ''}"
	/>
</div>
