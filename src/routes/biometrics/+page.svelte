<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import {
		TableSearch,
		TableHead,
		TableHeadCell,
		TableBody,
		TableBodyRow,
		TableBodyCell
	} from 'flowbite-svelte';

	let astronauts = [
		{
			name: 'John Doe',
			oxygen: 99,
			battery: 100,
			co2: 0,
			heartRate: 99,
			temperature: 99,
			location: 'Mars',
			fanSpeed: 68
		},
		{
			name: 'Jane Doe',
			oxygen: 100,
			battery: 100,
			co2: 0,
			heartRate: 100,
			temperature: 4,
			location: 'Mars',
			fanSpeed: 94
		},
		{
			name: 'John Doe',
			oxygen: 100,
			battery: 100,
			co2: 0,
			heartRate: 100,
			temperature: 98,
			location: 'Mars',
			fanSpeed: 77
		},
		{
			name: 'Jane Doe',
			oxygen: 100,
			battery: 100,
			co2: 0,
			heartRate: 100,
			temperature: 99,
			location: 'Mars',
			fanSpeed: 74
		},
		{
			name: 'John Doe',
			oxygen: 100,
			battery: 99,
			co2: 0,
			heartRate: 100,
			temperature: 0,
			location: 'Mars',
			fanSpeed: 63
		},
		{
			name: 'Jane Doe',
			oxygen: 100,
			battery: 100,
			co2: 0,
			heartRate: 99,
			temperature: 100,
			location: 'Mars',
			fanSpeed: 69
		},
		{
			name: 'John Doe',
			oxygen: 100,
			battery: 99,
			co2: 0,
			heartRate: 99,
			temperature: 98,
			location: 'Mars',
			fanSpeed: 79
		},
		{
			name: 'Jane Doe',
			oxygen: 100,
			battery: 100,
			co2: 0,
			heartRate: 100,
			temperature: 99,
			location: 'Mars',
			fanSpeed: 71
		},
		{
			name: 'John Doe',
			oxygen: 100,
			battery: 100,
			co2: 0,
			heartRate: 99,
			temperature: 99,
			location: 'Mars',
			fanSpeed: 51
		},
		{
			name: 'Jane Doe',
			oxygen: 99,
			battery: 99,
			co2: 0,
			heartRate: 100,
			temperature: 98,
			fanSpeed: 91
		}
	];

	const errorColor = 'text-red-600';
	const warningColor = 'text-orange-400';
	const goodColor = 'text-green-400';

	function TemperatureValidation(temperature) {
		let delta = Math.abs(temperature - 98.6);
		if (delta > 3) {
			return errorColor;
		} else if (delta > 1) {
			return warningColor;
		} else {
			return goodColor;
		}
	}

	let searchTerm = '';
	$: filteredItems = astronauts.filter((astronaut) =>
		astronaut.name.toLowerCase().includes(searchTerm.toLowerCase())
	);
</script>

<div class="h-full mr-24 overflow-auto">
	<TableSearch hoverable bind:inputValue={searchTerm}>
		<TableHead>
			<TableHeadCell>Name</TableHeadCell>
			<TableHeadCell>Oxygen</TableHeadCell>
			<TableHeadCell>Battery</TableHeadCell>
			<TableHeadCell>CO2</TableHeadCell>
			<TableHeadCell>Heart Rate</TableHeadCell>
			<TableHeadCell>Temperature</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			{#each filteredItems as prcedure}
				<TableBodyRow>
					<TableBodyCell>{prcedure.name}</TableBodyCell>
					<TableBodyCell>{prcedure.oxygen}</TableBodyCell>
					<TableBodyCell>{prcedure.battery}</TableBodyCell>
					<TableBodyCell>{prcedure.co2}</TableBodyCell>
					<TableBodyCell>{prcedure.heartRate}</TableBodyCell>
					<TableBodyCell>
						<span class={TemperatureValidation(prcedure.temperature)}>
							{prcedure.temperature} &deg;F
						</span>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</TableSearch>
</div>
