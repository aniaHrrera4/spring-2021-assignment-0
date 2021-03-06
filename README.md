# CS425 - Computer Graphics I (Spring 2021) - Andrea Herrera (aherre57)

## Assignment 0: Introduction to JavaScript and WebGL
The goal of this first assignment is develop a web application to render triangles with vertex position and colors defined in an external JSON file, specified by the user through a configuration panel. heavy reuse of LAB1 and LAB2 code. 
User will input desired Json file and have have the ability to toggle between the colors generated by slider or colors given by JSon File. 

## Run Program
Run python -m SimpleHTTPServer or python3 -m http.server 
to create a local:host. 

#### Index.html
Create a configuration panel with seven elements:
1) Four [sliders]
   <input id="sliderR" type="range" min="0" max="255" value="255" oninput="window.updateColor()">
   <input id="sliderG" type="range" min="0" max="255" value="255" oninput="window.updateColor()">
   <input id="sliderB" type="range" min="0" max="255" value="255" oninput="window.updateColor()">
2) A [slider]
    <input id="sliderA" type="range" min="0" max="255" value="255" oninput="window.updateColor()">
3) A file [input]
    <label for="file">Upload JSON</label>
    <input type="file" value="Upload File" id="file" name="file" accept="application/JSON" onchange='window.openFile()'><br>    
4) A [checkbox]
    <input type="checkbox" id="myCheck" name="tcolor" onchange='window.checkBox(event)'>
    <label for="tcolor">toggle colors</label>


#### Assignment0.js
new Functions added to original lab code
window.checkBox = function(): called when user toggles the check box in order to change colors. Sets var box to 1 if checked 
    else sets box =0 if unchecked that should trigger the conditional in the draw function to send the var to the vertex shader and update the fragment shader. 
window.openFile = function(): You should load this JSON file, parse it and use the data to fill one your buffer arrays. 
    if by any chance a file not following the specified format is loaded, then the application should display an alert.
    calls the preinitialize function after loading buffer arrays.
function preinitialize(): create buffers and locations after getting the data from the JSON files. this function also calculated the max
    number of triangles. 

functions that were updated:
draw(): The draw function was updated to include functionality for the toggle checkbox, depending on the state of the check box we update  
    the vertex and the fragment shader. 
initialize(): updated and removed buffer and location calls to preinitialize function. 

#### vertex.glsl.js
created uniform int box and flat out int box1 variables in order to send box info to the fragment shader. 
#### fragment.glsl.js
recieved flat in int box1 from the vertex shader in order to switch from sliders colors to colors given by JSon File. 

### GitHub Classroom
[git](https://en.wikipedia.org/wiki/Git) is a version control system, designed to help developers track different versions of your code, synchronize them across different machines, and collaborate with others. Follow the instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install git on your computer. [GitHub](https://github.com/) is a website that supports git as a service. [This](https://guides.github.com/activities/hello-world/) a nice tutorial on how to get started with git and GitHub.

Use `git clone` to get a local copy of the newly created repository. After writing your code, you can push your modifications to the server using `git commit` followed by `git push`. For example, if your username is `uic-user`:

```
git clone git@github.com:uic-cs425/assignment-0-uic-user.git
touch index.html
git add index.html
git commit -am "index.html file"
git push
```
