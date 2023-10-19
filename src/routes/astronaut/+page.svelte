<script>
	import { Heading, Span, Button } from 'flowbite-svelte';
	import Graph from '../graph.svelte';
	import { keepables, graphdata } from '../store';
	import EmptyVideo from '../EmptyVideo.svelte';

	let data = [
		['Battery:', '72%'],
		['Location:', '(31.9686, 99.9018)'],
		['Oxygen:', '96%'],
		['Heart Rate', '72bpm'],
		['CO2', '0.04%'],
		['Temperature', '20C']
	];

	const graphs = [
		{
			graphdata: [14.1, 13.9, 13.8, 13.7, 12.7, 12.3],
			lastDelta: '-12.3%',
			name: "Battery",
			status: "12.3V"
		},
		{
			graphdata: [98.4, 97.3, 97, 96.5, 96, 96],
			lastDelta: '-1.7%',
			name: 'Oxygen Level',
			status: '96%'
		},
		{
			graphdata: [72, 72, 73, 74, 73, 72],
			lastDelta: '-1bpm',
			name: 'Heart Rate',
			status: '72bpm'
		},
		{
			graphdata: [0.04, 0.04, 0.04, 0.04, 0.04, 0.04],
			lastDelta: '0.01%',
			name: 'CO2 Level',
			status: '0.04%'
		}
	];
</script>

<div class="w-fit h-fit m-4">
	<br />
	<div class="border-b p-2 dark:border-gray-700">
		<Heading tag="h1">ASTRONAUT</Heading>
	</div>
	<br />
	<Heading tag="h3">Stats</Heading>
	<br />
	<!-- <Button color="alternative">Battery 1: &nbsp <Span highlight>72%</Span></Button>
    <Button color="alternative">Battery 2: &nbsp <Span highlight>76%</Span></Button>
    <Button color="alternative">Location: &nbsp (<Span highlight>31.9686</Span>,<Span highlight>99.9018</Span>)</Button> -->
	<div style="width: 40rem;">
		{#each data as item}
			<Button
				color="alternative"
				on:click={() => keepables.addElement('ASTRONAUT', item)}
				class="m-1"
			>
				{item[0]} &nbsp
				<Span highlight>{item[1]}</Span>
			</Button>
		{/each}
	</div>
	<br />
	<br />
	<Heading tag="h3">Actions</Heading>
	<br />
	<Button color="dark">Add Procedure</Button>
	<Button color="dark">Take Picture</Button>
	<Button color="dark">Show Path</Button>
	<Button color="dark">Return</Button>
	<Button color="dark">Show Window</Button>
	<br />
	<br />
	<Heading tag="h3">Cameras</Heading>
	<br />
	<div class="flex flex-row">
		<div class="p-2">
			<EmptyVideo name="Hololens"/>
		</div>
	</div>
	<br />
	<br />
	<Heading tag="h3">Details</Heading>
	<br />
	<div class="flex flex-row flex-wrap">
		{#each graphs as graph}
			<button class="w-96 p-2" on:click={() => graphdata.addGraph("ASTRONAUT", graph.name, graph.graphdata)}>
				<Graph {...graph}/>
			</button>
		{/each}
	</div>
</div>
