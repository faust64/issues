module.exports = function (shipit) {
    'use strict';

    require('shipit-deploy')(shipit);

    shipit.initConfig({
	    default: {
		workspace: './tmp',
		dirToCopy: './',
		deployTo: '/var/www/issues',
		repositoryUrl: 'git@github.com:faust64/issues.git',
		ignores: ['.git', 'node_modules', 'dev', 'src'],
		rsync: ['--del'],
		keepReleases: 2,
		shallowClone: false
	    },
	    aws_prod: {
		branch: 'master',
		servers: [{ user: process.env.USER || 'undefined', host: '10.71.100.223', port: 222 }]
	    },
	    staging: {
		branch: 'master',
		servers: [{ user: process.env.USER || 'undefined', host: '10.255.100.223', port: 222 }]
	    }
	});

    shipit.on('published', function() {
	    shipit.start('permissions');
	});

    shipit.task('permissions', function() {
	    return shipit.remote('(chmod -R g+w /var/www/issues/releases || chmod -R g+w /var/www/issues/releases/* || true ) >/dev/null 2>&1 && '
				 + 'hostname -f | grep staging >/dev/null && '
				 + "sed -i 's|populate(\"aws_prod\",|populate(\"all\",|' /var/www/issues/current/index.html || "
				 + 'true');
	});
};
