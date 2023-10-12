<script>
	let scale = 1;
	let offsetX = 0;
	let offsetY = 0;
	let isPanning = false;
	let startX, startY;
	export let image;

	function handleWheel(event) {
		const delta = event.deltaY < 0 ? 1.1 : 0.9;
		const rect = event.currentTarget.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		const newScale = scale * delta;

		offsetX = ((offsetX - x) * newScale) / scale + x;
		offsetY = ((offsetY - y) * newScale) / scale + y;

		scale = newScale;
	}

	function handleMouseDown(event) {
		isPanning = true;
		startX = event.clientX - offsetX;
		startY = event.clientY - offsetY;
	}

	function handleMouseMove(event) {
		if (isPanning) {
			offsetX = event.clientX - startX;
			offsetY = event.clientY - startY;
		}
	}

	function handleMouseUp() {
		isPanning = false;
	}

	function handleDragStart(evnet) {
		event.preventDefault();
	}
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
      cursor: grab;
    "
>
	<img
		src={image}
		alt="a giant spaceship"
		style="
        transform: translate3d({offsetX}px, {offsetY}px, 0) scale({scale});
        transform-origin: 0 0;
        position: relative;
      "
	/>
</div>
