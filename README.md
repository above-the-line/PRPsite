# PRPsite Backend

To Get Started:

1. CLONE SOURCE CODE
   Git clone https://github.com/above-the-line/PRPsite.git
2. INSTALL SOURCE CODE DEPENDENCIES
   npm install
3. ENSURE THAT NO DATABASE NAMES WILL CONFLICT
   If you have any running MongoDB instances, delete:
   a) prismazxc
   b) default_default
4. SET UP YOUR ENVIRONMENT VARIABLES / SECRETS
   create .env file with vars:
   a) MONGO_INITDB_ROOT_USERNAME=mysecretname
   b) MONGO_INITDB_ROOT_PASSWORD=mysecretpassword
5. SPIN UP THE ENVIRONMENT IN DOCKER
   (in ./) docker-compose --file stack.yml up
6. DEPLOY THE PRISMA CLIENT
   (in ./prisma) prisma deploy
7. DEPLOY THE GQL SERVER (GQL-YOGA)
   (in ./src) node index.js

---

## | BACKEND SERVICE PORTS |

| prisma GQL Playground | 4466 |
| mongo | 27017 |
| express | 8081 |

---
