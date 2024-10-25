

# Ejecutar en Dv

1. Clonar el repositorio
2. Instalar las dependencias ``` npm install ```
4. Clonar el archivo ```.env.template``` y cambiar el nombre a ```.env ```
5. Levantar la base de datos ``` docker-compose up -d ```
6. Generar el db pull ``` npx prisma db pull ``` => Sincronizar el esquema de Prisma con la base de datos
7. Generar el prisma client ``` npx prisma generate ``` => Generar el cliente de Prisma basado en el esquema que tienes definido en el archivo
8. Levantar el servidor ````npm start:dev ```

