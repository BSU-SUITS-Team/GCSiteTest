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

	let bat_low_warn = 8;
	let bat_low_attn = 9;
	let bat_low_norm = 10;
	let bat_high_norm = 12;
	let bat_high_attn = 13;
	let bat_high_warn = 15;
	let o2_low_warn = 90;
	let o2_low_attn = 94;
	let o2_low_norm = 96;
	let o2_high_norm = 100;
	let o2_high_attn = 100;
	let o2_high_warn = 100;
	let hr_low_warn = 30;
	let hr_low_attn = 60;
	let hr_low_norm = 70;
	let hr_high_norm = 100;
	let hr_high_attn = 120;
	let hr_high_warn = 180;
	let co2_low_warn = 0;
	let co2_low_attn = 0;
	let co2_low_norm = 0;
	let co2_high_norm = .100;
	let co2_high_attn = .120;
	let co2_high_warn = .180;
	const graphs = [
		{
			lastDelta: '-12.3%',
			status: "12.3V",
			name: "Battery",
			graphcolor: '#1A56DB',
			ymin: bat_low_warn,
			ymax: bat_high_warn,
			graphseries: [
				{
					name: "Battery High",
					color: '#FF0000',
					data: [
						{
							x: 0,
							y: [bat_high_attn, bat_high_warn]
						},
						{
							x: 40,
							y: [bat_high_attn, bat_high_warn]
						},
					],
				},
				{
					name: "Battery Low",
					color: '#FF0000',
					data: [
						{
							x: 0,
							y: [bat_low_warn, bat_low_attn]
						},
						{
							x: 40,
							y: [bat_low_warn, bat_low_attn]
						},
					],
				},
				{
					name: "Battery Low",
					color: '#FFFF00',
					data: [
						{
							x: 0,
							y: [bat_high_norm, bat_high_attn]
						},
						{
							x: 40,
							y: [bat_high_norm, bat_high_attn]
						},
					],
				},
				{
					name: "Battery Low",
					color: '#FFFF00',
					data: [
						{
							x: 0,
							y: [bat_low_attn, bat_low_norm]
						},
						{
							x: 40,
							y: [bat_low_attn, bat_low_norm]
						},
					],
				},
				{
					name: "Battery normal",
					color: '#00FF00',
					data: [
						{
							x: 0,
							y: [bat_low_norm, bat_high_norm]
						},
						{
							x: 40,
							y: [bat_low_norm, bat_high_norm]
						},
					],
				},
				{
					name: "Battery",
					color: '#1A56DB',
					data: [{
						x: 0,
						y: [14.1, 14.1]
					},
						{
							x: 10,
							y: [13.9, 13.9]
						},
						{
							x: 20,
							y: [13.8, 13.8]
						},
						{
							x: 30,
							y: [12.7, 12.7]
						},
						{
							x: 40,
							y: [12.3, 12.3]
						},
					],
				}
			],
		},
		{
			name: 'Oxygen Level',
			status: '96%',
			lastDelta: '-1.7%',
			graphcolor: '#1A56DB',
			ymin: o2_low_warn,
			ymax: o2_high_warn,
			graphseries: [
				{
					name: "o2tery High",
					color: '#FF0000',
					data: [
						{
							x: 0,
							y: [o2_high_attn, o2_high_warn]
						},
						{
							x: 40,
							y: [o2_high_attn, o2_high_warn]
						},
					],
				},
				{
					name: "o2tery Low",
					color: '#FF0000',
					data: [
						{
							x: 0,
							y: [o2_low_warn, o2_low_attn]
						},
						{
							x: 40,
							y: [o2_low_warn, o2_low_attn]
						},
					],
				},
				{
					name: "o2tery Low",
					color: '#FFFF00',
					data: [
						{
							x: 0,
							y: [o2_high_norm, o2_high_attn]
						},
						{
							x: 40,
							y: [o2_high_norm, o2_high_attn]
						},
					],
				},
				{
					name: "o2tery Low",
					color: '#FFFF00',
					data: [
						{
							x: 0,
							y: [o2_low_attn, o2_low_norm]
						},
						{
							x: 40,
							y: [o2_low_attn, o2_low_norm]
						},
					],
				},
				{
					name: "o2tery normal",
					color: '#00FF00',
					data: [
						{
							x: 0,
							y: [o2_low_norm, o2_high_norm]
						},
						{
							x: 40,
							y: [o2_low_norm, o2_high_norm]
						},
					],
				},
				{
					name: "Battery",
					color: '#1A56DB',
					data: [{
						x: 0,
						y: [98.2, 98.2]
					},
						{
							x: 10,
							y: [97, 97]
						},
						{
							x: 20,
							y: [97.3, 97.3]
						},
						{
							x: 30,
							y: [96.3, 96.3]
						},
						{
							x: 40,
							y: [94.3, 94.3]
						},
					],
				}
			],
		},
		{
			/*
		{
			graphdata: [72, 72, 73, 74, 73, 72],
			lastDelta: '-1bpm',
			name: 'Heart Rate',
			status: '72bpm'
		},*/
			name: 'Heart Rate',
			status: '72 bpm',
			lastDelta: '-1 bpm',
			graphcolor: '#1A56DB',
			ymin: hr_low_warn,
			ymax: hr_high_warn,
			graphseries: [
				{
					name: "hrtery High",
					color: '#FF0000',
					data: [
						{
							x: 0,
							y: [hr_high_attn, hr_high_warn]
						},
						{
							x: 40,
							y: [hr_high_attn, hr_high_warn]
						},
					],
				},
				{
					name: "hrtery Low",
					color: '#FF0000',
					data: [
						{
							x: 0,
							y: [hr_low_warn, hr_low_attn]
						},
						{
							x: 40,
							y: [hr_low_warn, hr_low_attn]
						},
					],
				},
				{
					name: "hrtery Low",
					color: '#FFFF00',
					data: [
						{
							x: 0,
							y: [hr_high_norm, hr_high_attn]
						},
						{
							x: 40,
							y: [hr_high_norm, hr_high_attn]
						},
					],
				},
				{
					name: "hrtery Low",
					color: '#FFFF00',
					data: [
						{
							x: 0,
							y: [hr_low_attn, hr_low_norm]
						},
						{
							x: 40,
							y: [hr_low_attn, hr_low_norm]
						},
					],
				},
				{
					name: "hrtery normal",
					color: '#00FF00',
					data: [
						{
							x: 0,
							y: [hr_low_norm, hr_high_norm]
						},
						{
							x: 40,
							y: [hr_low_norm, hr_high_norm]
						},
					],
				},
				{
					name: "Heart Rate",
					color: '#1A56DB',
					data: [{
						x: 0,
						y: [83, 83]
					},
						{
							x: 10,
							y: [81, 81]
						},
						{
							x: 20,
							y: [81, 81]
						},
						{
							x: 30,
							y: [78, 78]
						},
						{
							x: 40,
							y: [74, 74]
						},
					],
				}
			],
		},
		{
			/*
		{
			graphdata: [0.04, 0.04, 0.04, 0.04, 0.04, 0.04],
			lastDelta: '0.01%',
			name: 'CO2 Level',
			status: '0.04%'
		}
			*/
			name: 'CO2 Levels',
			status: '0.04',
			lastDelta: '0%',
			graphcolor: '#1A56DB',
			ymin: co2_low_warn,
			ymax: co2_high_warn,
			graphseries: [
				{
					name: "co2tery High",
					color: '#FF0000',
					data: [
						{
							x: 0,
							y: [co2_high_attn, co2_high_warn]
						},
						{
							x: 40,
							y: [co2_high_attn, co2_high_warn]
						},
					],
				},
				{
					name: "co2tery Low",
					color: '#FF0000',
					data: [
						{
							x: 0,
							y: [co2_low_warn, co2_low_attn]
						},
						{
							x: 40,
							y: [co2_low_warn, co2_low_attn]
						},
					],
				},
				{
					name: "co2tery Low",
					color: '#FFFF00',
					data: [
						{
							x: 0,
							y: [co2_high_norm, co2_high_attn]
						},
						{
							x: 40,
							y: [co2_high_norm, co2_high_attn]
						},
					],
				},
				{
					name: "co2tery Low",
					color: '#FFFF00',
					data: [
						{
							x: 0,
							y: [co2_low_attn, co2_low_norm]
						},
						{
							x: 40,
							y: [co2_low_attn, co2_low_norm]
						},
					],
				},
				{
					name: "co2tery normal",
					color: '#00FF00',
					data: [
						{
							x: 0,
							y: [co2_low_norm, co2_high_norm]
						},
						{
							x: 40,
							y: [co2_low_norm, co2_high_norm]
						},
					],
				},
				{
					name: "CO2 Levels",
					color: '#1A56DB',
					data: [{
						x: 0,
						y: [0.04, 0.04]
					},
						{
							x: 10,
							y: [0.04, 0.04]
						},
						{
							x: 20,
							y: [0.04, 0.04]
						},
						{
							x: 30,
							y: [0.04, 0.04]
						},
						{
							x: 40,
							y: [0.04, 0.04]
						},
					],
				}
			],
		},
		/*
		{
			graphdata: [98.4, 97.3, 97, 96.5, 96, 96],
				lastDelta: '-1.7%',
				status: '96%'
				name: 'Oxygen Level',
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
		*/
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
