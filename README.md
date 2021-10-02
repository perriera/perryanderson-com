
# perryanderson-com
## Installation steps
[How to setup NodeJS/AngularJS](https://mvthanoshan.medium.com/how-to-setup-angular-on-ubuntu-14633ee93a57)
### 1. Install NodeJS
Node.js is an open-source server environment that uses JavaScript on the server.
We have to install LTS version as it’s recommended for most users. At this time latest LTS Version: 12.16.1 (includes npm 6.13.4).

	   curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
	   sudo apt-get install -y nodejs

Latest Node.js LTS version information can be found on the Node.js website.
The installation code depending on the Node.js version can be found on NodeSource which is a Node.js Binary Distributor.

### 2. Update NPM
Normally, NPM will be installed with the Node.js itself. However, we can update it to the latest version using the below command.
Sometimes it’s optional but I recommend you to do it.

	   sudo npm install npm@latest -g

### 3. Install the Angular CLI

	   sudo npm install -g @angular/cli

Here we’re using sudo to avoid any permission issues that may occur.

### 4. Update project to version 12 of Angular

	sudo npm install npm@latest -g
	sudo npm install --save-dev @angular-devkit/build-angular
	sudo npm update
	npm install --save --legacy-peer-deps
	npm audit fix 

### 5. Run the application

	   cd perryanderson-com
	   ng serve --open

Now we’re good to go.
Happy Coding!

----
## Optional
Run `sudo apt-get install -y nodejs` to install Node.js 12.x and npm
### You may also need development tools to build native addons:
     sudo apt-get install gcc g++ make
### To install the Yarn package manager, run:
	curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
	echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
	sudo apt-get update && sudo apt-get install yarn

