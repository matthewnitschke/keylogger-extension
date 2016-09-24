# keylogger-extension
A terrible keylogger chrome extension.

This is what boredom creates.

# Installation

There are two parts. The chrome extension and the server

### Extension
1. Go to the chrome settings -> Extensions
2. Enable Developer Mode by clicking the check box
3. Drag the extension folder from this repository into the chrome window

### Server
1. Create a new directory in your apache server
2. drag the server folders contents into the directory
3. make sure CORS is enabled on that directory

Once installed you should be ready to go. Keypresses will be logged in the logging.txt file

# Reasons why this is bad
There are so many. 

1. The chrome extension is easy to spot and developer mode must be enabled.
2. Chrome recognizes something weird is going on, so it disables the extension. You can re-enable it by clicking on the sheild in the right side of the omni-box
3. It is encredibly inefficient. Each key press makes a request to the server
4. It is crazy easy to track. Simply just look where the request are going
5. I am sure there are more, but now I am bored of this. 
