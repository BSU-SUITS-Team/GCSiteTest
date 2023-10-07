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
			oxygen: 100,
			battery: 100,
			co2: 0,
			heartRate: 100,
			bloodPressure: 100,
			temperature: 99,
			location: 'Mars'
		},
		{
			name: 'Jane Doe',
			oxygen: 100,
			battery: 100,
			co2: 0,
			heartRate: 100,
			bloodPressure: 100,
			temperature: 99,
			location: 'Mars'
		},
		{
			name: 'John Doe',
			oxygen: 100,
			battery: 100,
			co2: 0,
			heartRate: 100,
			bloodPressure: 100,
			temperature: 99,
			location: 'Mars'
		},
		{
			name: 'Jane Doe',
			oxygen: 100,
			battery: 100,
			co2: 0,
			heartRate: 100,
			bloodPressure: 100,
			temperature: 99,
			location: 'Mars'
		},
		{
			name: 'John Doe',
			oxygen: 100,
			battery: 100,
			co2: 0,
			heartRate: 100,
			bloodPressure: 100,
			temperature: 99,
			location: 'Mars'
		},
		{
			name: 'Jane Doe',
			oxygen: 100,
			battery: 100,
			co2: 0,
			heartRate: 100,
			bloodPressure: 100,
			temperature: 99,
			location: 'Mars'
		},
		{
			name: 'John Doe',
			oxygen: 100,
			battery: 100,
			co2: 0,
			heartRate: 100,
			bloodPressure: 100,
			temperature: 99,
			location: 'Mars'
		},
		{
			name: 'Jane Doe',
			oxygen: 100,
			battery: 100,
			co2: 0,
			heartRate: 100,
			bloodPressure: 100,
			temperature: 99,
			location: 'Mars'
		},
		{
			name: 'John Doe',
			oxygen: 100,
			battery: 100,
			co2: 0,
			heartRate: 100,
			bloodPressure: 100,
			temperature: 99,
			location: 'Mars'
		},
		{
			name: 'Jane Doe',
			oxygen: 100,
			battery: 100,
			co2: 0,
			heartRate: 100,
			bloodPressure: 100,
			temperature: 99
		}
	];

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
			<TableHeadCell>Blood Pressure</TableHeadCell>
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
					<TableBodyCell>{prcedure.bloodPressure}</TableBodyCell>
					<TableBodyCell>{prcedure.temperature}</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</TableSearch>
</div>
