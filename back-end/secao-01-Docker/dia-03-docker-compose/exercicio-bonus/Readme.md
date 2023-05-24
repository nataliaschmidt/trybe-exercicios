Crie um arquivo Compose para subir o WordPress com MySQL:

1 - Utilize a imagem wordpress:php8.0 e mysql:5.7.40;

2 - Faça bind da porta 80 do container do wordpress para 8080 do host;

3 - Defina as seguintes variáveis para o wordpress:

WORDPRESS_DB_HOST: db:3306
WORDPRESS_DB_USER: wordpress
WORDPRESS_DB_PASSWORD: wordpress
WORDPRESS_DB_NAME: wordpress
4 - Defina as seguintes variáveis para o mysql:

MYSQL_ROOT_PASSWORD: somewordpress
MYSQL_DATABASE: wordpress
MYSQL_USER: wordpress
MYSQL_PASSWORD: wordpress
5 - Defina o volume db_data para o mysql;

6 - Utilize o parâmetro depends_on para criar dependência entre os serviços;

7 - Adicione a política de restart com o valor always aos serviços;

8 - Suba os serviços utilizando docker-compose e abra no terminal para validar o funcionamento.