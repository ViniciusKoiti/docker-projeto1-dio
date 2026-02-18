# Projeto Docker DIO - Apache + Aplicacao Web

Projeto do desafio da DIO utilizando Docker Compose para servir uma aplicacao web com Apache (`httpd`).

## Estrutura

```text
docker-projeto1-dio/
|- compose.yml
|- website/
|  |- index.html
|  |- styles.css
|  |- script.js
```

## Como executar

1. Entre na pasta do projeto:

```bash
cd docker-projeto1-dio
```

2. Suba o container:

```bash
docker compose -f compose.yml up -d
```

3. Acesse no navegador:

```text
http://localhost:80
```

4. Para parar:

```bash
docker compose -f compose.yml down
```

## Publicar no GitHub

```bash
git init
git add .
git commit -m "Projeto DIO: Apache com Docker Compose e pagina web completa"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/docker-projeto1-dio.git
git push -u origin main
```

## Tecnologias

- Docker
- Docker Compose
- Apache HTTP Server (`httpd`)
- HTML, CSS e JavaScript
