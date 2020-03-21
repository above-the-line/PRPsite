# PRPsite

To Get Started:
1. Git clone https://github.com/above-the-line/PRPsite.git
2. npm install
3. If you have any running MongoDB instances, delete:
     a) prisma
     b) default_default
4. create .env file with vars:
     a) $MONGO_INITDB_ROOT_USERNAME=prisma
     b) $MONGO_INITDB_ROOT_PASSWORD=prisma
5. (in ./backend) docker-compose --file stack.yml up
6. (in ./prisma) prisma deploy
7. (in ./src) node index.js  