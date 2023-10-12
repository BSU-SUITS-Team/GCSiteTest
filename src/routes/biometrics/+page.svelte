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
			co2: 178,
			heartRate: 0,
			temperature: 99,
			location: 'Mars',
			fanSpeed: 68
		},
		{
			name: 'Jane Doe',
			oxygen: 70,
			battery: 100,
			co2: 178,
			heartRate: 100,
			temperature: 4,
			location: 'Mars',
			fanSpeed: 94
		},
		{
			name: 'John Doe',
			oxygen: 30,
			battery: 100,
			co2: 178,
			heartRate: 110,
			temperature: 98,
			location: 'Mars',
			fanSpeed: 77
		},
		{
			name: 'Jane Doe',
			oxygen: 12,
			battery: 100,
			co2: 570,
			heartRate: 140,
			temperature: 99,
			location: 'Mars',
			fanSpeed: 74
		},
		{
			name: 'John Doe',
			oxygen: 100,
			battery: 99,
			co2: 2170,
			heartRate: 124,
			temperature: 0,
			location: 'Mars',
			fanSpeed: 63
		},
		{
			name: 'Jane Doe',
			oxygen: 100,
			battery: 100,
			co2: 178,
			heartRate: 255,
			temperature: 100,
			location: 'Mars',
			fanSpeed: 69
		},
		{
			name: 'John Doe',
			oxygen: 100,
			battery: 99,
			co2: 179,
			heartRate: 99,
			temperature: 98,
			location: 'Mars',
			fanSpeed: 79
		},
		{
			name: 'Jane Doe',
			oxygen: 100,
			battery: 30,
			co2: 178,
			heartRate: 100,
			temperature: 99,
			location: 'Mars',
			fanSpeed: 71
		},
		{
			name: 'John Doe',
			oxygen: 100,
			battery: 0,
			co2: 300,
			heartRate: 99,
			temperature: 99,
			location: 'Mars',
			fanSpeed: 51
		},
		{
			name: 'Jane Doe',
			oxygen: 99,
			battery: 99,
			co2: 245,
			heartRate: 100,
			temperature: 98,
			fanSpeed: 91
		}
	];

	const errorColor = 'p-2 text-align-left rounded-md bg-red-600 text-red-950';
	const warningColor = 'p-2 text-align-left rounded-md bg-orange-500 text-orange-950';
	const goodColor = 'p-2 text-align-left rounded-md ';

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

	function HeartRateValidation(heartRate) {
		let target = 90;
		let delta = Math.abs(heartRate - target);
		if (delta > 40) {
			return errorColor;
		} else if (delta > 20) {
			return warningColor;
		} else {
			return goodColor;
		}
	}

	function CO2Validation(co2) {
		co2 = Math.abs(co2);
		if (co2 > 1000) {
			return errorColor;
		} else if (co2 > 500) {
			return warningColor;
		} else {
			return goodColor;
		}
	}

	function BatteryValidation(battery) {
		if (battery < 10) {
			return errorColor;
		} else if (battery < 50) {
			return warningColor;
		} else {
			return goodColor;
		}
	}

	function OxygenValidation(oxygen) {
		if (oxygen < 25) {
			return errorColor;
		} else if (oxygen < 50) {
			return warningColor;
		} else {
			return goodColor;
		}
	}

	//This code is appaling, but it works
	function GetWorst(astonaut){
		let worst = goodColor;
		if (OxygenValidation(astonaut.oxygen) == errorColor){
			worst = errorColor;
		}
		else if (OxygenValidation(astonaut.oxygen) == warningColor && worst != errorColor){
			worst = warningColor;
		}
		if (BatteryValidation(astonaut.battery) == errorColor){
			worst = errorColor;
		}
		else if (BatteryValidation(astonaut.battery) == warningColor && worst != errorColor){
			worst = warningColor;
		}
		if (CO2Validation(astonaut.co2) == errorColor){
			worst = errorColor;
		}
		else if (CO2Validation(astonaut.co2) == warningColor && worst != errorColor){
			worst = warningColor;
		}
		if (HeartRateValidation(astonaut.heartRate) == errorColor){
			worst = errorColor;
		}
		else if (HeartRateValidation(astonaut.heartRate) == warningColor && worst != errorColor){
			worst = warningColor;
		}
		if (TemperatureValidation(astonaut.temperature) == errorColor){
			worst = errorColor;
		}
		else if (TemperatureValidation(astonaut.temperature) == warningColor && worst != errorColor){
			worst = warningColor;
		}
		
		// const bgError = 'bg-red-400';
		// const bgWarning = 'bg-orange-400';

		// if (worst == errorColor){
		// 	return bgError;
		// }
		// else if (worst == warningColor){
		// 	return bgWarning;
		// }
		// else{
		// 	return '';
		// }
		return worst;
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
			<TableHeadCell>
				Oxygen
			</TableHeadCell>
			<TableHeadCell>
				Battery
			</TableHeadCell>
			<TableHeadCell>
				CO2
			</TableHeadCell>
			<TableHeadCell>
				Heart Rate
			</TableHeadCell>
			<TableHeadCell>
				Temperature
			</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			{#each filteredItems as prcedure}
				<TableBodyRow>
					<TableBodyCell>
						<span class={GetWorst(prcedure)}>
							{prcedure.name}
						</span>
					</TableBodyCell>
					<TableBodyCell >
						<span class={OxygenValidation(prcedure.oxygen)}>
							{prcedure.oxygen.toLocaleString()}%
						</span>
					</TableBodyCell>
					<TableBodyCell >
						<span class={BatteryValidation(prcedure.battery)}>
							{prcedure.battery.toLocaleString()}%
						</span>
					</TableBodyCell>
					<TableBodyCell >
						<span class={CO2Validation(prcedure.co2)}>{prcedure.co2.toLocaleString()} PPM</span>
					</TableBodyCell>
					<TableBodyCell >
						<span class={HeartRateValidation(prcedure.heartRate)}>
							{prcedure.heartRate.toLocaleString()} BPM
						</span>
					</TableBodyCell>
					<TableBodyCell >
						<span class={TemperatureValidation(prcedure.temperature)}>
							{prcedure.temperature.toLocaleString()} &deg;F
						</span>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</TableSearch>
</div>
