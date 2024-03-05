# Mellowtech Photos version 3

Version 3 of Mellowtech Photos is primarily a technology update. In particular
it
- Organises MT Photos in a monorepo
- Adds docker capabilities, i.e. you can either run MT Photos in a docker
- container or as "normal" application on a server

In addition MT Photos version 3 comes with the following feature changes
- Everything is now centered around photo albums, which for instance means that you have
better control (and can change) which of your albums will act
as your public "photo stream"
- Replaced MUI with Tailwind as that is better supported by next.js
- Added complete versioning to the application such that any upgrades will happen seamlessly
without you having to run specific update commands

Mellowtech photos consists of

- A backend in golang
- A postgres db
- A frontend in next.js + tailwind
- A proxy in nginx

## Docker commands to get you going

```bash
docker compose up -d
```