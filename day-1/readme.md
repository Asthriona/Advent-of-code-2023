# Day 1
For day 1, it's supposed to be a warm up, but it already breaks my mind, 
I took all the lines, convert them to strings in my IDE and then put them in an array. 
Then with some regex I take all the lines, and remove the characters that's not numbers, with a forEach statement. 

After that I noticed a lots of lines had more than 2 numbers, since we need to get the first and last ones, with another forEach I took all the lines, and removed the inbetween or more like put the first and last in another array. using a if else to check for arrays with more than 2 numbers, 
But we also need to duplicate the arrays with 1 numbers.
so I need to add another step in my if else with else if, and set it so if there is less push into the array twice instead. 

that gives us a bunch of array with 2 numbers in them, all we need to do is bringing them back together as int.
then sum them all up and we good!