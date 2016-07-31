FetchError.js
=============
[![NPM version][npm-badge]](https://www.npmjs.com/package/fetch-error)

FetchError.js is an error class for use with the [Fetch API][fetch].  
It's based on [StandardHttpError.js][standard-http-error].

[npm-badge]: https://img.shields.io/npm/v/fetch-error.svg
[fetch]: https://developer.mozilla.org/en/docs/Web/API/Fetch_API
[standard-http-error]: https://github.com/moll/js-standard-http-error


Installing
----------
```sh
npm install fetch-error
```

FetchError.js follows [semantic versioning](http://semver.org), so feel free to depend on its major version with something like `>= 1.0.0 < 2` (a.k.a `^1.0.0`).


Using
-----
```javascript
var FetchError = require("fetch-error")

function errorify(res) {
  if (res.status >= 400 && res.status < 600)
    throw new FetchError(res.status, res.statusText, {response: res})
  else
    return res
}

var res = fetch("/").then(errorify)
```

Should the response be unsuccessful, the promise will be rejected with `FetchError` Such a pattern of separating success flows from failures is very handy: in the response resolve handlers you know all went well and don't have to double check for errors every time.

You can also later detect an erroneous response from other errors, such as bugs, through `instanceof`:

```javascript
res.catch(function(err) {
  if (err instanceof FetchError) console.error(err.message)
  else throw err
})
```

For a library that does the above and slightly more, see [FetchThrow.js][fetch-throw].

[fetch-throw]: https://github.com/moll/js-fetch-throw


License
-------
FetchError.js is released under a *Lesser GNU Affero General Public License*, which in summary means:

- You **can** use this program for **no cost**.
- You **can** use this program for **both personal and commercial reasons**.
- You **do not have to share your own program's code** which uses this program.
- You **have to share modifications** (e.g. bug-fixes) you've made to this program.

For more convoluted language, see the `LICENSE` file.


About
-----
**[Andri Möll][moll]** typed this and the code.  
[Monday Calendar][monday] supported the engineering work.

If you find FetchError.js needs improving, please don't hesitate to type to me now at [andri@dot.ee][email] or [create an issue online][issues].

[email]: mailto:andri@dot.ee
[issues]: https://github.com/moll/js-fetch-error/issues
[moll]: http://themoll.com
[monday]: https://mondayapp.com
