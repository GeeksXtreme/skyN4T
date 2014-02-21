
# How to create your own SkyN4T Botnet


## 1. Installation of NodeJS

- Login to your future SkyN4T Server (e.g. skynet.org or localhost)
- Go to http://nodejs.org/download/
- Install NodeJS (at least v0.10.15 due to WebSocket usage)


## 2. Installation lycheeJS:

- Login to your future SkyN4T Server (e.g. skynet.org or localhost)
- git clone https://github.com/LazerUnicorns/lycheeJS.git /var/www/lycheeJS;
- cd /var/www/lycheeJS;
- git checkout dev-0.8;


## 3.a Register as a SkyN4T Bot using your Web Browser

- Login to your future Zombie machine (can also be localhost)
- Surf to http://localhost:8080/ or http://skynet.org:8080/
- You are now a Zombie that attacks future targets :)


## 3.b Register as a SkyN4T Bot using NodeJS

- Login to your future Zombie machine (can also be localhost)
- Install NodeJS there (for now, future package builds will be available)
- cd /var/www/lycheeJS/skynet/
- nodejs init.js - now you are a Zombie :)


# 4. Send Commands to the Botnet using the TechCOM interface

- Login to your machine (should be able to reach skynet.org)
- Surf to http://skynet.org/techcom/ or http://localhost:8080/external/techcom/
- You are now an admin that can push actions to the Bots


