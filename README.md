# Laravel WebDav
A webdav driver for laravel filesystem

[![Latest Version on Packagist](https://img.shields.io/packagist/v/singlequote/laravel-webdav.svg?style=flat-square)](https://packagist.org/packages/singlequote/laravel-webdav)
[![Total Downloads](https://img.shields.io/packagist/dt/singlequote/laravel-webdav.svg?style=flat-square)](https://packagist.org/packages/singlequote/laravel-webdav)


### Installation
```bash
composer require singlequote/laravel-webdav
```

## Usage

### Add the new entries to your `.env`
```env
WEBDAV_BASEURL=""
WEBDAV_USERNAME=
WEBDAV_PASSWORD=

#optional
WEBDAV_PROXY=
WEBDAV_PATHPREFIX=""
WEBDAV_AUTHTYPE=
WEBDAV_ENCODING=
```

### Add the new entries to the config

`config/filesystems.php`
```php

'disks' => [
	...
	'webdav' => [
	    'driver'     => 'webdav',
	    'baseUri'    => env("WEBDAV_BASEURL"),
	    'userName'   => env("WEBDAV_USERNAME"),
	    'password'   => env("WEBDAV_PASSWORD"),
	    
	    //Optional prameters
	    'proxy'      => env("WEBDAV_PROXY", null),
	    'pathPrefix' => env("WEBDAV_PATHPREFIX", null),
	    'authType'   => env("WEBDAV_AUTHTYPE", null),
	    'encoding'   => env("WEBDAV_ENCODING", null),
	],
	...
];
```

After adding the config entry you can use it in your storage driver.

[Laravel filesystem](https://laravel.com/docs/master/filesystem)

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
