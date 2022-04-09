
**Install instructions**

Get auth token: https://twitchapps.com/tmi/

Get Node.js: https://nodejs.org/en/ (when installing remember to allowing the set PATH option)
    
    - ubuntu/debian -> $ sudo apt install curl
                       $ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    - fedora -> $ sudo yum install nodejs
    - arch -> You're 1337 you don't need README

$ symbol means this is a terminal command, dont write the $

Clone this repo:
    Windows - Github desktop https://desktop.github.com/
    
    ![image](https://user-images.githubusercontent.com/103317937/162592385-cf7e5800-2842-4b1c-8e97-4dba81e2b116.png)

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
    $ npm i yargs
    
 Edit the auth.js file with any text editor (save after)
    - Windows -> notepad is fine
    
    - Linux -> $ nano auth.js -> (edit) -> Ctrl + O

--------------------
Now for the fun bit
--------------------
![image](https://user-images.githubusercontent.com/103317937/162575415-53d3dac3-5494-4248-b4f8-05fa02ae3120.png)

Changing colours
---------------------------------------------------------------
Change index.js file however you need to, nano or notepad.

Copy and paste the else if line below into the code below the if statement and above the else statement including all brackets:

e.g.

else if (argv.scheme == new String("grey").valueOf()) {
                colors = ["#ffffff","#d9d9d9","#b0b0b0","#878787","#575757"]; //Greyname Pride
}

The script can then be run e.g. below, and will use the hex colors supplied within the brackets; 

---------------------------------------
$ node index.js --scheme="grey" 
---------------------------------------
List of current schemes, trans is the default
- trans
- rainbow
- grey
- ukraine
- sa
- kkona

Some colors will not show up on twitch, as dark colors are clipped to more colorful versions of that color. If you do not have Twitch Prime or Turbo, you will need to use color names such as the following standard user colors below.

Blue, BlueViolet, CadetBlue, Chocolate, Coral, DodgerBlue, Firebrick, GoldenRod, Green, HotPink, OrangeRed, Red, SeaGreen, SpringGreen, YellowGreen. 

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
        "adi_dev",
        "hasansecurityguard",
        "grfnn",
        "dbutters",
        "lithium_flowerhd"
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
        "hasansecurityguard",
        "grfnn",
        "dbutters",
        "lithium_flowerhd",
        "your_username_here"
    ]
    
remembering to keep the username in "quotation marks" and adding a comma , after every new entry except the final one. 

