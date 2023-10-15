<script>
	import { onMount } from 'svelte';
	import PinButton from './PinButton.svelte';

	let scale = 1;
	let offsetX = 0;
	let offsetY = 0;
	let isPanning = false;
	let startX, startY;
	// ex. [{type: 'red', x: 100, y: 100}, {type: 'blue', x: 200, y: 200}]
	let pins = [];
	let isPlacingPin = false;

	export let image;
	export let initalSize = 1;
	export let minScale = 0.1;
	export let maxScale = 10;
	export let xRange = [0, 9999999];
	export let yRange = [0, 9999999];

	function handleWheel(event) {
		const delta = event.deltaY < 0 ? 1.1 : 0.9;
		const rect = event.currentTarget.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		const newScale = Math.max(minScale, Math.min(maxScale, scale * delta));

		const newOffsetX = ((offsetX - x) * newScale) / scale + x;
		const newOffsetY = ((offsetY - y) * newScale) / scale + y;

		xRange = [xRange[0] * newScale, xRange[1] * newScale];
		yRange = [yRange[0] * newScale, yRange[1] * newScale];

		offsetX = Math.min(xRange[1], Math.max(xRange[0], newOffsetX));
		offsetY = Math.min(yRange[1], Math.max(yRange[0], newOffsetY));

		scale = newScale;
	}

	function handleMouseDown(event) {
		if (isPlacingPin) {
			const x = event.clientX - event.currentTarget.offsetLeft; 
    		const y = event.clientY - event.currentTarget.offsetTop; 
			const correctedX = (x - offsetX) / scale;
			const correctedY = (y - offsetY) / scale;

			pins = [...pins, { type: isPlacingPin, x: correctedX, y: correctedY }];
			isPlacingPin = false;
			return;
		}
		isPanning = true;
		startX = event.clientX - offsetX;
		startY = event.clientY - offsetY;
	}

	function startPlacingPin(type) {
		isPlacingPin = type;
	}

	function handleMouseMove(event) {
		if (isPanning) {
			const newOffsetX = event.clientX - startX;
			const newOffsetY = event.clientY - startY;
			console.log(newOffsetX, newOffsetY);

			offsetX = Math.min(xRange[1], Math.max(xRange[0], newOffsetX));
			offsetY = Math.min(yRange[1], Math.max(yRange[0], newOffsetY));
		}
	}

	function handleMouseUp() {
		isPanning = false;
	}

	function handleDragStart(event) {
		event.preventDefault();
	}

	onMount(() => {
		scale = initalSize;
		// offsetX = (window.innerWidth - image.width * initalSize) / 2;
		// offsetY = (window.innerHeight - image.height * initalSize) / 2;
	});
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:wheel={handleWheel}
	on:mousedown={handleMouseDown}
	on:mousemove={handleMouseMove}
	on:mouseup={handleMouseUp}
	on:mouseleave={handleMouseUp}
	on:dragstart={handleDragStart}
	style="
      overflow: hidden;
      width: 100%;
      height: 100%;
      position: relative;
    "
>
	{#each pins as pin}
		<div
			class="absolute z-10"
			style="
	transform: translate3d({pin.x * scale + offsetX}px, {pin.y * scale + offsetY}px, 0);
	transform-origin: 0 0;
  "
		>
			<PinButton color={pin.type} move/>
		</div>
	{/each}

	<div class="absolute z-10 top-5 w-full">
		<div class="flex justify-center">
			<div class="mb-4 p-2 shadow-xl rounded-lg flex flex-row bg-white w-fit dark:bg-gray-800">
				<PinButton color="red" onclick={() => startPlacingPin('red')} />
				<PinButton color="orange" onclick={() => startPlacingPin('orange')} />
				<PinButton color="blue" onclick={() => startPlacingPin('blue')} />
				<PinButton color="green" onclick={() => startPlacingPin('green')} />
			</div>
		</div>
	</div>
	<img
		src={image}
		alt="a giant spaceship"
		style="
		transform: translate3d({offsetX}px, {offsetY}px, 0) scale({scale});
		transform-origin: 0 0;
		position: relative;
		"
		class="top-0 left-0"
	/>
</div>
