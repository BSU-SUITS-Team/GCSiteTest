<script>
	import { DrawSquareSolid, MapPinAltSolid } from 'flowbite-svelte-icons';
	export let onclick = () => {};
	export let move = false;

	let toggled = false;
</script>

<div>
	<DrawSquareSolid 
		on:click={() => {onclick(); toggled = !toggled}}
		class="m-2 w-5 h-5 text-{toggled ? 'primary' : 'gray'}-500 dark:text-{toggled ? 'primary' : 'gray'}-400 transition duration-75 focus:outline-none"
		style="{move ? 'transform: translate3d(-95%, -150%, 0);' : ''}"
	/>
</div>
