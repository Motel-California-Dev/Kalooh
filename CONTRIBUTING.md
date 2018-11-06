# Kalooh

Kalooh is a location-based social media app that lets users post “notes” based on their current location and allows others in the area to view and comment on these notes.

---
### Features:
- Dynamic Maps/Geolocation
- Authentication with email and OAuth providers
- Real-time messaging
- Push notifications
---
### Technologies
##### Development Stack
- Yarn *(Package Manager)*
- React Native *(Cross-Platform Mobile Component Library)*
- FlowJS *(Static Type Checking)*
- React Navigation *(Front-End Navigation/Router)*
- Mobx *(State Manager)*
- RealM *(Local storage database)*
- MongoDB *(NoSQL Database)*
- Jest *(Testing Framework)*
- Amazon Web Services *(Cloud Provider)*
##### Operations Stack
- Vagrant *(Virtual Machine)*
- Docker *(Container System)*
- Travis CI *(Continuous Integration Tool)*
- Github *(Source Control)*
---
---
### Minimum System Requirements
As per Docker's minimum requirements:
- Linux kernel version 3.10 or higher/64-bit Windows 7+/macOS El Capitan 10.11 or Newer
- 2 GB RAM
- Static IP address
- VirtualBox v4.3.31 and higher

Minimum size requirements for the app are currently unknown.
### Dependencies
You must have Git and Docker installed. 

For instructions on how to install Git, [click this link](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

For instructions on how to install Docker, [click this link](https://docs.docker.com/install/) and download the appropriate installer for your operating system.

Make sure to install [Docker-CE (Community Edition)](https://docs.docker.com/install/), [Docker Compose](https://docs.docker.com/compose/install/), and [Docker Machine](https://docs.docker.com/machine/install-machine/).

### Installation
Clone git repository using the following commands:
```
git clone https://github.com/Motel-California-Dev/Kalooh.git
cd Kalooh
```
Then, run the following commands:
```
docker-compose up
```

This will start a container that will run an environment isolated from your OS.

Check to see if the container(s) are running:
```
docker ps
```

If there is no output or an error, make sure your installations of Docker CE/Compose/Machine are correctly installed.

View the running application at localhost:8080.

### How to Contribute
All of the source code is hosted on the [Github repository](https://github.com/Motel-California-Dev/Kalooh)

If you intend to make any significant changes to the codebase, please [file an issue](https://github.com/Motel-California-Dev/Kalooh/issues). By doing this, it allows us to reach an agreement to the proposed changes before any significant effort is made in implementing the change.

Any bug fixes or minor changes can be submitted immediately via a pull request. However, we suggest that you file an issue anyways to detail what it is that you're fixing or changing.

#### Submitting a Pull Request
Before submitting a pull request, make sure you:
1. Fork the repository.
2. Install the dependencies with `yarn install`.
3. Create your own branch separate from the master.
4. Ensure the test suites pass. Run `yarn test`. (Add your own tests to the codebase that are relevant to the feature or bugfix you are submitting).
5. Lint your code using `yarn run lint` or `yarn run prettier`.
6. If everything is working, submit your pull request! 

Your code will be reviewed and either returned for further work before being approved, or merged!

#### How to get in touch
E-Mail: dev.kalooh@gmail.com
