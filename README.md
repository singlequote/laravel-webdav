# Laravel Cacher
A powerful cache trait based on Laravel's file cache driver

[![Latest Version on Packagist](https://img.shields.io/packagist/v/singlequote/laravel-cacher.svg?style=flat-square)](https://packagist.org/packages/singlequote/laravel-cacher)
[![Total Downloads](https://img.shields.io/packagist/dt/singlequote/laravel-cacher.svg?style=flat-square)](https://packagist.org/packages/singlequote/laravel-cacher)


### Installation
```bash
composer require singlequote/laravel-webdav
```

## Usage

### Add a new entry to the config

model:
```php
// config/filesystems.php

'disks' => [
	...
	'webdav' => [
	    'driver'     => 'webdav',
	    'baseUri'    => env("WEBDAV_BASEURL"),
	    'userName'   => env("WEBDAV_USERNAME"),
	    'password'   => env("WEBDAV_PASSWORD"),
	    'pathPrefix' => env("WEBDAV_PATHPREFIX", null), // optional
	],
	...
];
```

Now whenever you call your `App\User` model, you can use the caching trait

```php
use App\User;

$users = User::whereEmail('foo@bar.world')->remember(); //<= default ttl is 7 days
$users = User::whereEmail('foo@bar.world')->remember(3600); //<= 1 hour

//or keep it forever by your side <3
$users = User::whereEmail('foo@bar.world')->rememberForever();
```

### Custom prefix
By default the cache prefix is unique. You can use your own prefix by calling the `prefix` method
```php
    $users = User::whereEmail('foo@bar.world')->prefix("all-users")->remember(); //prefix all-users
    
    cache()->forget("all-users");
```

### All methods

 ```php
    $users = User::whereEmail('foo@bar.world')->remember(/*3600*/); //for 1 hour -  default 7 days
    $users = User::whereEmail('foo@bar.world')->rememberForever(); //for ever
    
    //find
    $user = User::whereEmail('foo@bar.world')->findAndRemember(1, /*3600*/);
    $user = User::whereEmail('foo@bar.world')->findAndRememberForever(1);
    
    //first
    $user = User::whereEmail('foo@bar.world')->firstAndRemember(/*3600*/);
    $user = User::whereEmail('foo@bar.world')->firstAndRememberForever();
    
    //counting
    $user = User::whereEmail('foo@bar.world')->rememberCount(/*3600*/);
    $user = User::whereEmail('foo@bar.world')->rememberCountForever();
    
    //paginating
    $user = User::whereEmail('foo@bar.world')->paginateAndRemember(20, /*3600*/); //return 20 results
    $user = User::whereEmail('foo@bar.world')->paginateAndRememberForever(20); //return 20 results
 ```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Postcardware

You're free to use this package, but if it makes it to your production environment we highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using.

Our address is: Quotec, Traktieweg 8c 8304 BA, Emmeloord, Netherlands.

## Credits

- [Wim Pruiksma](https://github.com/wimurk)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
