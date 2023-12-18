ust run the commands below

```sh
# to install the PHP dependencies
composer install

#to install Node dependecies
npm install 

cp .env.example .env
php artisan key:generate
php artisan migrate
```
