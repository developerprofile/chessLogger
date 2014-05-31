chessLogger
===========

Alpha Chess Analysis using Chess.js and ChessBoard.js

# Background

Back in 2006, I had a TREO.  The phone was cool at the time, but it had a chess program that was great.  The engine 
was okay, but it really shone when used to record a game between 2 people.  When I upgraded to 
a legitimate smart phone, I couldn't find anything as useful even though I've now downloaded 
about 30 apps in search of this holy grail.


# Features

* Standard graphical board with click and drag movement (thanks [oakmac](https://github.com/oakmac/chessboardjs)!)
* Disallow invalid moves (thanks [jhlywa](https://github.com/jhlywa/chess.js)!)
* Click on a move in the move list to reposition the board to that move
* Create analysis lines by making a different move when the board is not at the end of the move list
* Persist to a mongoDB database


# To Be Implemented

* Multiple Users with access to all games marked public or participated in
* Real-time playing over a network
* Analysis notation and commenting
* Set up a position to play from
* Import PGN files


# Installation

* Clone the repo
* Run ```npm install``` and ```bower install```
* Edit ```chessLogger.js``` to add your default mongodb url, db name, and collection name
in the app.run block (if you want game persistence)
* Enjoy