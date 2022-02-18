Sending Rover to Mars By ----S Muj-----

What needs to be set as constants in the app entry:
- The grid’s size
- The Rover’s default direction
- The Rover’s default position
- The list of commands

-------------------------

Our Mars Rover’s default direction is “N” (as North). Its direction is one of four values: “N”, “S”, “E”
or “W”.
Example: If the Rover is facing North and turns left, it is now facing West.

-------------------------

To move the Rover around, we have to keep track of its position. Positions are represented as a pair
of coordinates: ”x” and ”y”. Their default values are both 0.
The Rover can't move and turn at the same time. This means that if the Rover wants to move to the
left, its first move must be a turn. Its next move will then be a step forward.
The commands are the first letter of either (f)orward, (r)ight, or (l)eft.
To test it, you can use the string ‘rfflfflfrff’
