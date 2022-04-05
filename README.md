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

After adding the config entry you can use it in your storage driver.

```php
Storage::disk('webdav')->files('...')
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
