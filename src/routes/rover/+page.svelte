<script>
	import { Heading, Span, Button } from 'flowbite-svelte';
	import Graph from '../graph.svelte';
	import { keepables } from '../store';

	let data = [
		['Battery 1:', '72%'],
		['Battery 2:', '76%'],
		['Location:', '(31.9686, 99.9018)'],
		['Status:', 'Active']
	];
</script>

<div class="w-fit h-fit m-4">
	<br />
	<div class="border-b p-2 dark:border-gray-700">
		<Heading tag="h1">ROVER</Heading>
	</div>
	<br />
	<Heading tag="h3">Stats</Heading>
	<br />
	<!-- <Button color="alternative">Battery 1: &nbsp <Span highlight>72%</Span></Button>
    <Button color="alternative">Battery 2: &nbsp <Span highlight>76%</Span></Button>
    <Button color="alternative">Location: &nbsp (<Span highlight>31.9686</Span>,<Span highlight>99.9018</Span>)</Button> -->
	<div  style="width: 40rem;">
        {#each data as item}
		<Button color="alternative" on:click={() => keepables.addElement('ROVER', item)}  class="m-1">
			{item[0]} &nbsp
			<Span highlight>{item[1]}</Span>
		</Button>
	{/each}
    </div>
	<br />
	<br />
	<Heading tag="h3">Actions</Heading>
	<br />
	<Button color="dark">Collect Sample</Button>
	<Button color="dark">Drop Sample</Button>
	<Button color="dark">Take Picture</Button>
	<Button color="dark">Return</Button>
	<Button>Self Destruct</Button>
	<br />
	<br />
	<Heading tag="h3">Details</Heading>
	<br />
	<div class="flex flex-row flex-wrap">
		<div class="w-96 p-2">
			<Graph graphdata={[14.1, 13.9, 13.8, 13.7, 12.7, 12.3]} lastDelta="-12.3%" name="Battery 1" />
		</div>
		<div class="w-96 p-2">
			<Graph graphdata={[98.4, 97.3, 97, 96.5, 96, 96]} lastDelta="-10.7%" name="Battery 2" status="12.3V"/>
		</div>
	</div>
</div>
