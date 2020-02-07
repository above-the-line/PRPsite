# PRPsite

To Get Started:
1. Git clone https://github.com/above-the-line/PRPsite.git
2. npm install
3. If you have any running MongoDB instances, delete:
     a) prisma
     b) default_default
4. (in ./backend) docker-compose --file stack.yml up
5. (in ./prisma) prisma deploy
6. (in ./src) node index.js  