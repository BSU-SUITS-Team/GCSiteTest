<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import {
		TableSearch,
		TableHead,
		TableHeadCell,
		TableBody,
		TableBodyRow,
		TableBodyCell,
		Card,
		Heading
	} from 'flowbite-svelte';
	import Chart from './chart.svelte';
	import {
		CheckCircleOutline,
		ExclamationCircleOutline,
		XCircleOutline
	} from 'flowbite-svelte-icons';

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
	function GetWorst(astonaut) {
		let worst = goodColor;
		if (OxygenValidation(astonaut.oxygen) == errorColor) {
			worst = errorColor;
		} else if (OxygenValidation(astonaut.oxygen) == warningColor && worst != errorColor) {
			worst = warningColor;
		}
		if (BatteryValidation(astonaut.battery) == errorColor) {
			worst = errorColor;
		} else if (BatteryValidation(astonaut.battery) == warningColor && worst != errorColor) {
			worst = warningColor;
		}
		if (CO2Validation(astonaut.co2) == errorColor) {
			worst = errorColor;
		} else if (CO2Validation(astonaut.co2) == warningColor && worst != errorColor) {
			worst = warningColor;
		}
		if (HeartRateValidation(astonaut.heartRate) == errorColor) {
			worst = errorColor;
		} else if (HeartRateValidation(astonaut.heartRate) == warningColor && worst != errorColor) {
			worst = warningColor;
		}
		if (TemperatureValidation(astonaut.temperature) == errorColor) {
			worst = errorColor;
		} else if (TemperatureValidation(astonaut.temperature) == warningColor && worst != errorColor) {
			worst = warningColor;
		}

		return worst;
	}
</script>

<div class="h-full mr-24 overflow-auto">
	{#each astronauts as astro}
		<Card class="mb-2">
			<div class="flex justify-between flex-row border-b mb-2 pb-2">
				<div>
					<h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
						{astro.name}
					</h5>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">Biometrics</p>
				</div>
				<div
					class="flex items-top px-2.5 py-0.5 text-base font-semibold text-red-500 dark:text-red-500 text-center"
				>
					<CheckCircleOutline class="w-5 h-5 ml-1 mt-2 text-green-500" />
					<ExclamationCircleOutline class="w-5 h-5 ml-1 mt-2 text-orange-500" />
				</div>
			</div>
			<!-- <div class="flex flex-row justify-between pb-2">
				<p class=" text-black">
					Oxygen
					<span class="text-green-500"> 52% </span>
				</p>
				<Chart />
			</div> -->
			{#each Object.keys(astro) as key}
				{#if key != 'name' && key != 'location' && key != 'fanSpeed'}
					<div class="flex flex-row justify-between pb-2">
						<p class=" text-black">
							{key}
							<span class="text-green-500"> {astro[key]} </span>
						</p>
						<Chart />
					</div>
				{/if}
			{/each}
		</Card>
	{/each}
</div>
