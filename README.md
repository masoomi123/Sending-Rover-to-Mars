Sending Rover to Mars By S Muj
To move the Rover around, we have to keep track of its position. Positions are represented as a pair
of coordinates: ”x” and ”y”. Their default values are both 0.
The Rover can't move and turn at the same time. This means that if the Rover wants to move to the
left, its first move must be a turn. Its next move will then be a step forward.
The commands are the first letter of either (f)orward, (r)ight, or (l)eft.
To test it, you can use the string ‘rfflfflfrff’
