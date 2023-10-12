<script>
	import { Button } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import Joystick from './Joystick.svelte';
	let clickedButtons = [];
	const buttonNames = [
		'X',
		'O',
		'□',
		'△',
		'LB',
		'RB',
		'LT',
		'RT',
		'▫▫▫',
		'▤',
		'L3',
		'R3',
		'↑',
		'↓',
		'←',
		'→',
		'doNotPress',
		'Gamepad'
	];
	let joystickLeft = [];
	let joystickRight = [];
	for (let i = 0; i < 18; i++) {
		clickedButtons.push(false);
	}
	let poll;

	// window.ongamepadconnected=(e) => {console.log(e);}

	function printconnectedgamepads() {
		console.log(navigator.getGamepads()[0].buttons);
	}

	function plugIn() {
		doFrame();
	}
	function doFrame() {
		var connectedController = navigator.getGamepads()[0];
		if (connectedController == null) {
			return;
		}
		let joysticks = connectedController.axes;
		joystickLeft = joysticks.slice(0, 2);
		joystickRight = joysticks.slice(2, 4);
		var buttons = connectedController.buttons;
		for (let buttonindex = 0; buttonindex < buttons.length; buttonindex++) {
			const button = buttons[buttonindex];

			if (button.pressed) {
				clickedButtons[buttonindex] = true;
			} else {
				clickedButtons[buttonindex] = false;
			}
		}

		poll = requestAnimationFrame(doFrame);
	}
	function unPlug() {}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div>
	<!-- <Button color={clickedButtons[0] ? 'primary' : 'alternative'}>X</Button> -->
	{#each buttonNames as button}
		<Button color={clickedButtons[buttonNames.indexOf(button)] ? 'primary' : 'alternative'}
			>{button}</Button
		>
	{/each}
	<Joystick  joystickvalue={joystickLeft} name = "left joystick"></Joystick>
	<Joystick  joystickvalue={joystickRight} name = "right Joystick"></Joystick>
</div>

<svelte:window on:gamepadconnected={plugIn} on:gamepaddisconnected={unPlug} />
