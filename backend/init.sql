CREATE USER 'usuario'@'%' IDENTIFIED BY 'senha_usuario';
GRANT ALL PRIVILEGES ON *.* TO 'usuario'@'%';
FLUSH PRIVILEGES;
