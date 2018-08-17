Choose your own Adventure Creator
Made by Oscar Morales

Using Node and javscript you too can create your own adventure.

Download the repo to a sweet spot folder in your computer.

How to make a story:

In the adventure text file you start filling in your story
each line is a story beat and should start with a number

Line example

  22#The mongrel has found you, what do you do?#Run away,23#Fight,43

The first number represents the story beat.

To make story beats follow this simple pattern

1. Pick a unique number
2. Inform the player of the situation and give him a question
3. Make some answers that lead to a story beat

  uniquenumber#information#answer1,33#answer2,67#answer3,89

The answer are put together like so

  Quit,33

"Quit" is the answer the player can choose and 33 is the story beat they will go to.

It's simple have fun breaking my little parser! I'll try to fix bugs that come up.
If you have any suggestions let me know.
Have Fun!