
**Install instructions**

Get auth token: https://twitchapps.com/tmi/  
Get Node.js: https://nodejs.org/en/

$ symbol means this is a terminal command, dont write the $

Clone this repo:
    Windows - Github desktop
    
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


