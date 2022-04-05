<?php

namespace SingleQuote\WebDav;

use Illuminate\Support\Facades\Facade;

class WebDavFacade extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'WebDav';
    }
}
