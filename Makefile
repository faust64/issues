clean:
	rm -fr node_modules tmp

dependencies:
	if ! which npm >/dev/null 2>&1; then \
	    echo "NPM not found" >&2; \
	    echo "Make sure NodeJS and NPM are installed and available in your PATH" >&2; \
	fi; \
	if ! test -x ./node_modules/.bin/shipit; then \
	    npm install; \
	fi

test:
	js -c ./inc/db.json

ship:	dependencies test
	rm -fr tmp; \
	if test "$$NODE_ENV"; then \
	    ./node_modules/.bin/shipit $$NODE_ENV deploy; \
	else \
	    ./node_modules/.bin/shipit staging deploy; \
	fi
