# Issues

A web frontend rendering issues list.

## Installation

Peerio-status is shipped by PeerioTechnologies/peerio-websites, in a debian
archive gathering a few static frontends - as well as piwik.

## Manual Installation

```
root@web# cd /var/www
root@web# git clone https://github.com/faust64/issues.git
root@web# cd issues
root@web# rm -fr .git* README.md LICENSE
root@web# export SERVER_NAME=issues.peerio.com
root@web# cat <<EOF >/etc/nginx/sites-available/service-issues.conf
server {
    listen 80;
    server_name $SERVER_NAME;
    add_header Strict-Transport-Security max-age=31536000;
    add_header X-Frame-Options SAMEORIGIN;

    location / {
	ssi on;
	root /var/www/issues;
	index index.html;
    }
}

server {
    listen 443 ssl spdy;
    server_name $SERVER_NAME;
    add_header Strict-Transport-Security max-age=31536000;
    add_header X-Frame-Options SAMEORIGIN;
    ssl on;
    ssl_certificate /etc/nginx/ssl/server.crt;
    ssl_certificate_key /etc/nginx/ssl/server.key;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 5m;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:DHE-RSA-AES128-SHA:DES-CBC3-SHA;
    ssl_prefer_server_ciphers on;

    location / {
	ssi on;
	root /var/www/issues;
	index index.html;
    }
}
EOF
root@web# ln -sf /etc/nginx/sites-available/service-issues.conf /etc/nginx/sites-enabled/service-issues.conf
root@web# service nginx restart #or systemctl restart nginx
```
