# Tagarela

Tagarela é um projeto voltado a crianças com apraxia de fala,
ele buscas auxiliar crianças na sua comunicação e aprimoramento de dicção.

## Rodando o projeto

Use git para clonar o repositório

```bash
git clone https://github.com/RenatoHioji/pi.git
```

Entre na pasta do diretório (**Assumindo que o clone foi feito no diretório atual**)

```bash
cd pi/
```

### Execução local

***

Obs:. **Necessário instalar o [nodejs](https://nodejs.org/en) com versão maior ou igual 20.10.0**

execute o comando abaixo na raíz do projeto para instalar todas as dependências

```bash
npm i 
```

e após execute o comando abaixo para iniciar a execução do projeto

```bash
npm start
```

### Execução em Docker

***

Obs:. **Necessário instalar o [Docker](https://docs.docker.com/manuals/)**

execute o commando abaixo para iniciar o containêr docker

```bash
docker compose up
```

**Nota:** use o comando abaixo para parar o container docker

```bash
docker compose down
```