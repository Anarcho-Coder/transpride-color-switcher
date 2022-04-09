
**Install instructions**

Get auth token: https://twitchapps.com/tmi/

Get Node.js: https://nodejs.org/en/ (when installing remember to allowing the set PATH option)
    
    - ubuntu/debian -> $ sudo apt install nodejs
    - fedora -> $ sudo yum install nodejs
    - arch -> You're 1337 you don't need README

$ symbol means this is a terminal command, dont write the $

Clone this repo:
    Windows - Github desktop https://desktop.github.com/
    
    Linux - Install Git (ubuntu/debian $ sudo apt install git, fedora $ sudo yum install git)
          - $ git clone https://github.com/Anarcho-Coder/transpride-color-switcher.git
          
Open terminal to cloned repo
    Windows - Open folder with code (you need to see the .js files)
            - Type powershell in the file explorer nav bar
    ![image](https://user-images.githubusercontent.com/103317937/162575046-dba5d9e5-fcc3-413e-a569-153ed7872699.png)
    
    Mac/Linux - $ cd ~/path/to/folder/withJSfiles
    
Install node dependencies
    Operating system agnostic
    
    $ npm install
    $ npm i tmi.js
    
 Edit the auth.js file with any text editor (save after)
    - Windows -> notepad is fine
    
    - Linux -> $ nano auth.js -> (edit) -> Ctrl + O
    
   Run the project
   
   $ npm start

![image](https://user-images.githubusercontent.com/103317937/162575415-53d3dac3-5494-4248-b4f8-05fa02ae3120.png)

--------------------
Now for the fun bit
--------------------

Changing colours
---------------------------------------------------------------
Change index.js file however you need to, nano or notepad.

remove the // in front of a colour line to activate it, only one can be activated at a time

the #ffffff is the colour, use https://www.color-hex.com/ to pick your own colour


e.g.

//let colors = ["#ff0000","#ff9c00","#eeff00","#1eff00","#00beff"]; // Rainbow

let colors = ["#5BCEFA", "#F5A9B8", "#FFFFFF", "#F5A9B8", "#5BCEFA"]; // Trans Pride

or 

let colors = ["#ff0000","#ff9c00","#eeff00","#1eff00","#00beff"]; // Rainbow

//let colors = ["#5BCEFA", "#F5A9B8", "#FFFFFF", "#F5A9B8", "#5BCEFA"]; // Trans Pride


Adding your own channel
-----------------------------------------------------
In index.js, change this

channels: [
        "SlowQueer",
        "HasanAbi",
        "AzureMako",
        "JoanAtoms",
        "ThoughtSlime",
        "MafiaJinx",
        "Keffals",
        "adi_dev"
    ]
    
to 
   
channels: [
        "SlowQueer",
        "HasanAbi",
        "AzureMako",
        "JoanAtoms",
        "ThoughtSlime",
        "MafiaJinx",
        "Keffals",
        "adi_dev",
        "your_username_here"
    ]
    
remembering to keep the username in "quotation marks" and adding a comma , after every new entry. 

