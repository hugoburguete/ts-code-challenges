I have a meeting in ten minutes, and I'd love to sneak a little walk in. I can walk one city block per minute, so I should be able to plan out a valid route. I'm representing my walk as an array of cardinal directions n, s, w, e.

Here is your challenge: Given an array of directions to walk, return true if the route will take me exactly 10 minutes AND return me to my office.

Constraints:
A route will only contain the four cardinal directions. You don't need to worry about my ability to travel up and down, my superpowers are a secret anyway. 🤫

Test Cases:
With input ['n','s','n','s','n','s','n','s','n','s'], return true
With input ['w','e','w','e','w','e','w','e','w','e','w','e'], return false
With input ['n', 's', 'e', 'w', 's', 'e', 'n', 'w', 'w', 'e'], return true
With input ['w'], return false
With input ['n','n','n','s','n','s','n','s','n','s'], return false
