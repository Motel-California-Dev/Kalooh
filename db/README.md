# Development Database

To run the development database, make sure you have Docker and Docker Compose installed.

The development database *should* start up by simply running the `docker-compose up` command.

When you run `docker-compose up`, it will start a Docker container instance (similar to a Virtual Machine). You can check that it is running by running the command `docker ps`.

---
---

### Troubleshooting
When you run `docker-compose up` for the first time, it will build a Docker "image", which is essentially a set of instructions to build an application, from the OS and up. Then, it will also start a running container that is a concrete instance of the image. Everytime you run `docker-compose up` after that, it will simply rerun the stopped container. This might cause errors if something in the database files changes, since this change wont be reflected in the image or the container itself. To rebuild the image and container, run `docker-compose --build`. This will rebuild everything and will more than likely fix most directly Docker-related problems.
