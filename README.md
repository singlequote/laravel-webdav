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

# Optional
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
	    'pathPrefix' => env("WEBDAV_PATHPREFIX", ''),

	    // Optional prameters
	    // 'proxy'      => env("WEBDAV_PROXY", 'locahost:8888'),
	    // 'authType'   => env("WEBDAV_AUTHTYPE", null),
	    // 'encoding'   => env("WEBDAV_ENCODING", null),
	],
	...
];
```
After adding the config entry you can use it in your storage driver.

[Laravel filesystem](https://laravel.com/docs/master/filesystem)

```php
Storage::disk('webdav')->files('...')
```


## Config

#### Proxy
When using your webdav server behind a proxy, use the `proxy` config parameter to set our proxy url
```php
'webdav' => [
	...
	'proxy'      => env("WEBDAV_PROXY", 'locahost:8888'),
]
```

#### AuthType
If you know which authentication method will be used, it's recommended to set it, as it will save a great deal of requests to 'discover' this information.
```php
'webdav' => [
	...
	'authType'      => env("WEBDAV_AUTHTYPE", 1), // 1 = Uses Basic authentication
]
```

Possible authTypes listed below

| Value | Auth type |
| -------- | ------- |
| 1 | Basic authentication |
| 2 | Digest authentication |
| 4 | NTLM authentication |

#### Encoding
This wil set the encoding parameter.

```php
'webdav' => [
	...
	'encoding'      => env("WEBDAV_ENCODING", 1), // 1 = Uses Identity encoding
]
```

Possible encoding types listed below

| Value | Encoding type |
| -------- | ------- |
| 1 | Identity encoding, which basically does not nothing. This is also the default setting |
| 2 | Deflate encoding |
| 4 | Gzip encoding |
| 7 | Sends all encoding headers |

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
