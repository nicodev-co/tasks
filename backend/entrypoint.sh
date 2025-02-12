#!/bin/sh

echo "Esperando conexión a la base de datos..."
sleep 10

echo "Ejecutando migraciones..."
php artisan migrate --force

echo "Iniciando servidor Laravel..."
exec php artisan serve --host=0.0.0.0 --port=8000
