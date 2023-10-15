<script>
	import Panview from './Panview.svelte';
	import img from '$lib/images/test.svg';
	import { MapPinAltSolid } from 'flowbite-svelte-icons';
	import PinButton from './PinButton.svelte';
	import { Heading } from 'flowbite-svelte';
</script>

<Panview
	image={img}
	initalSize="10"
	minScale="2"
	maxScale="20"
	xRange={[-1000, 0]}
	yRange={[-1000, 0]}
/>
