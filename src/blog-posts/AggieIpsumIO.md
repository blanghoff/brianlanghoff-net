---
title: 'AggieIpsum.io'
date: '2019-03-28'
tags: ['AggieIpsum']
---

<h2><a href="https://aggieipsum.io" target="_blank">AggieIpsum.io</a> is live!</h2>

It's a joy to ship things, and even though this is a very rudimentary start, it requires setting all the components in place for development.

I don't profess to be an expert on how to publish a website, but I have a basic path that I frequently use. This process is a bit overkill for the project at this stage, but I wanted to support the full 100 Days of Code (and other challenges). 

### Brian's Process for Publishing a New Site
1. Setup [GitHub Repo](https://github.com/blanghoff/aggieipsum-io/)
2. Setup Ubuntu Server (flavor of the day is 18.04 LTS)
	* Install and configure [Git](https://git-scm.com/)
	* Install and configure [NGINX](https://www.nginx.com/)
	* Install and configure [Certbot](https://certbot.eff.org/)
	* Create deploy/certbot shell scripts
3. Changeover DNS Records
4. Clone repo and run deploy scripts
5. Enjoy your new (secure) site!

### Install and configure NGINX
1. Install NGINX<br />
	`sudo apt install nginx -y`
2. Setup Configuration file
	```
	sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/aggieipsum
	sudo nano /etc/nginx/sites-available/aggieipsum
	**modify bits**
	sudo ln -s /etc/nginx/sites-available/aggieipsum /etc/nginx/sites-enabled/
	```
3. NGINX Test<br />
	`sudo nginx -t`

### Install and configure Certbot
1. Install Certbot<br />
	`sudo apt install certbot python-certbot-nginx -y`
2. Setup Certbot
	`sudo certbot --nginx`

### Install and configure Git
1. Install Git<br />
	`sudo apt install git -y`
2. Configure SSH Key and Add to Repository
	```
	ssh-keygen
	**work through prompts**
	cat .ssh/id_rsa.pub | pbcopy
	```
3. Add SSH Key to Repo as Deploy Key

### Create deploy/certbot scripts
Two things happen all the time:
1. You'll need to secure your site. It is free, provided you keep it up to date with Certbot every 90 days.
2. You'll need to deploy new code

I setup a simple script that does the following:
`sudo certbot --nginx`
and add the task to `sudo crontab`

In the absence of a more sophisticated CI/CD method, for now I rely on simple `rsync` commands, like:<br />
`sudo rsync -rhvtuliP --exclude=".git" ~/aggieipsum-io/ /var/www/html`