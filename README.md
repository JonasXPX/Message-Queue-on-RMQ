# Message-Queue-on-RMQ

## Objetivo
Aprimorando conhecimentos com RabbitMQ para trabalhar dentro da arquitetura de microserviços


## Executando o projeto

Passo 1: Necessário ter uma instancia do RabbitMQ rodando

Passo 2: Configurar o serviço RabbitMQ (Com a imagem do rabbitmq no dockerhub, não necessário nenhuma configuração além para subir o projeto)

Passo 3: Rodar o consumer `node consume/consumer.js`

Passo 4: Iniciar o producer: `node producer/produder.js`

## Explicação

RabbitMQ tem como objetivo facilitar a comunicação entre serviços, afim de criar uma fila de comunicação, Ex. Entre uma API que recebe a solicitação de upload de imagem e o serviço que irá recortar a imagem para diminuir o tamalho, e o serviço para disponibilizar na S3
