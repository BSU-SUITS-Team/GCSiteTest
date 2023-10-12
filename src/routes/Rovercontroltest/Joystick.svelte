<script>
    export let joystickvalue;
    export let name = "joystick";
</script>
<div>
    <h1>{name}</h1>
    <div>
        x: {joystickvalue[0]}
        y: {joystickvalue[1]}
    </div>
</div>