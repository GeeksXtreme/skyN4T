
# How to create your own SkyN4T Botnet


## 1. Installation of NodeJS

- Login to your future SkyN4T Server (e.g. skyn4t.org or localhost)
- Go to http://nodejs.org/download/
- Install NodeJS (at least v0.10.15 due to WebSocket usage)


## 2. Installation lycheeJS:

- Login to your future SkyN4T Server (e.g. skyn4t.org or localhost)
- git clone https://github.com/LazerUnicorns/lycheeJS.git /var/www/lycheeJS;
- cd /var/www/lycheeJS;
- git checkout dev-0.8;

## 3. Install SkyN4T

- Login to your future SkyN4T Server (e.g. skyn4t.org or localhost)
- cd /var/www/lycheeJS;
- mkdir ./external;
- git clone https://github.com/martensms/skyN4T external/skyN4T;

## 4. Start SkyN4T Server

- Login to your future SkyN4T Server (e.g. skyn4t.org or localhost)
- cd /var/www/lycheeJS;
- cd sorbet;
- nodejs init.js localhost;
- Surf to http://localhost:8080/external/skyN4T/skynet/
- If the website is reachable, everything is setup.


## 5.a Register as a SkyN4T Bot using your Web Browser

- Login to your future Zombie machine (can also be localhost)
- Surf to http://localhost:8080/external/skyN4T/skynet/ or http://skyn4t.org/
- You are now a Zombie :)


## 5.b Register as a SkyN4T Bot using NodeJS

- Login to your future Zombie machine (can also be localhost)
- Install NodeJS and lycheeJS there
- (... only for now, future package builds will be available)
- cd /var/www/lycheeJS/external/skyN4T/
- nodejs init.js
- You are now a Zombie :)


## 6. Send Commands to the Botnet using TechCOM interface

- Login to your machine (should be able to reach http://skyn4t.org)
- Surf to http://skyn4t.org/techcom/ or http://localhost:8080/external/techcom/
- You are now an admin that can push actions to the Bots


