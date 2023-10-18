<script>
	export let fullRange = 10;
	export let warnRange = [2.5, 7.5];
	export let nominalRange = [3.5, 6.5];
	export let value = 0;

	let warnWidth = ((warnRange[1] - warnRange[0]) / fullRange) * 10;
	let warnStart = (warnRange[0] / fullRange) * 10;

	let nominalWidth = ((nominalRange[1] - nominalRange[0]) / fullRange) * 10;
	let nominalStart = (nominalRange[0] / fullRange) * 10;

	let position = Math.min(Math.max((value / fullRange) * 10, 0), 10);

    // this will store which layer the cursor is in as a int. 0 is full, 1 is warning, 2 is nominal
    let activeSector;
    if (value < warnRange[0] || value > warnRange[1]) {
        activeSector = 0;
    } else if (value < nominalRange[0] || value > nominalRange[1]) {
        activeSector = 1;
    } else {
        activeSector = 2;
    }

	console.log(warnWidth);
</script>

<div class="w-40 h-6 {activeSector == 0 ? 'bg-red-600' : 'bg-gray-200'} rounded-lg relative shadow-lg">
	<div
		class="h-6 {activeSector == 1 ? 'bg-orange-500' : 'bg-gray-500'} rounded-lg absolute shadow-lg"
		style="width: {warnWidth}rem; left: {warnStart}rem;"
	/>
	<div
		class="h-6 {activeSector == 2 ? 'bg-green-500' : 'bg-gray-500'} rounded-lg absolute shadow-lg"
		style="width: {nominalWidth}rem; left: {nominalStart}rem;"
	/>
	<div class="h-6 bg-slate-700 absolute shadow-lg" style="width: .5px; left: {position}rem;" />
</div>
