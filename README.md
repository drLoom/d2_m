# README

# Specify passwords:
```
cp .env-template .env
```

# Docker compose
````
docker-compose -f docker/docker-compose.yml --env-file ./.env up -d
````
[Tailwind gustui](https://www.gustui.com/docs/application/elements/tables)
[Tailwind merakiui](https://merakiui.com/components/)


Current server IP: 46.101.197.208

https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md

```shell
docker build -t puppeteer-chrome-linux -f docker/puppeteer/Dockerfile ./docker/puppeteer/
```

```shell
docker run -i -v ${PWD}/docker/puppeteer/results:/results/ -u $(id -u ${USER}):$(id -g ${USER}) --init --rm --cap-add=SYS_ADMIN  --name puppeteer-chrome puppeteer-chrome-linux node -e "`cat ./docker/puppeteer/diablo2io.js`"
```