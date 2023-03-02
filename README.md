# Challenge

Wally’s Widget Company is a widget wholesaler. They sell widgets in a variety of pack sizes:

- 250 widgets
- 500 widgets
- 1,000 widgets
- 2,000 widgets
- 5,000 widgets

Their customers can order any number of widgets, but they will always be given complete packs.

The company wants to be able to fulfil all orders according to the following rules:

1. Only whole packs can be sent. Packs cannot be broken open.

2. Within the constraints of Rule 1 above, send out no more widgets than necessary to fulfil
   the order.

3. Within the constraints of Rules 1 & 2 above, send out as few packs as possible to fulfil each
   order.

So, for example:

Number of Widgets ordered:

- 1

Correct packs to send:

- 250 x1

Incorrect solution(s):

- 500 x1 (too many widgets)

# The task

Write a program that will tell Wally’s Widgets what packs to send out, for any given order size.

# Summary

The app has been written in Javascript using a React.js front-end framework. Some basic CSS styling has also been applied.

Before implementing the front-end interface, the functionality around the challenge was worked on and tested using Jest to ensure all test cases were considered and to prevent any false-positive tests passing.