var outages = [
    {
	what: 'general api outage',
	where: 'staging',
	why: 'some AWS health checks returned faulty, resulting in our ASG trying to replace the foreground worker instance from our staging setup',
	timeline: [
	    { date: 1464548106, what: 'uptimeRobot, statusCake & icinga2 report staging is down' },
	    { date: 1464549780, what: 'our faulty instance finally got replaced, ansible just started deploying the new one' },
	    { date: 1464551139, what: 'mail received from AWS, notifying us about a hardware failure on the host running our instance that just disappeared' },
	    { date: 1464551520, what: 'CodeDeploy failed pushing the last known-to-be-stable version of peerio-server to our new worker' },
	    { date: 1464551880, what: 'problem identified in our CodeDeploy init script, running on a blank instance' },
	    { date: 1464552720, what: 'dropped the foreground ASG from our staging deployment group, deployed a fix to the remaining instance of that group' },
	    { date: 1464553320, what: 'ansible finished configuring the new instance that will run our foreground worker on staging' },
	    { date: 1464553767, what: 'done running CodeDeploy, service is back up.' } ]
    }, {
	what: 'healthcheck flaps',
	where: 'labs',
	why: 'adding a constraint on redis memory usage, switching our healthcheck to faulty when there is not enough memory to handle further traffic',
	timeline: [
	    { date: 1464333288, what: 'health check returns unhealthy' },
	    { date: 1464341837, what: 'adding debugs, restarting pm2 processes' },
	    { date: 1464344092, what: 'health check returns unhealthy' },
	    { date: 1464349157, what: 'our labs setup has no active users, resulting in our redis database having a single record.<br/>Add a high limit to redis average key size, since our check aims to ensure at least 10.000 keys can be created' },
	    { date: 1464354805, what: 'health check returns unhealthy' },
	    { date: 1464385903, what: 'adding debugs, restarting pm2 processes' },
	    { date: 1464387219, what: 'health check returns unhealthy' },
	    { date: 1464435398, what: 'adding debugs, restarting pm2 processes' },
	    { date: 1464437532, what: 'health check returns unhealthy' },
	    { date: 1464441933, what: 'problem fixed with a parseInt.' } ]
    }, {
	what: 'public site outage',
	where: 'aws_prod',
	why: 'unscheduled, un-notified and still unexplained maintenance on our site instance, hosted by digitalocean',
	timeline: [
	    { date: 1464161352, what: 'uptimeRobot & statusCake notifies us that our site is not responding, cloudflare is serving a cached version' },
	    { date: 1464164280, what: 'waking up, acknowledged, digitalocean shows our VM is down, I can not start, stop or restart it, no explanation regarding what is going on, no notifications in our inboxes nor in the dashboard' },
	    { date: 1464165060, what: 'booting a new instance on EC2, provisioning our website, status site, windows and mac packages' },
	    { date: 1464165420, what: 'our digitalocean instance came back to life, which I only relized half an hour later' },
	    { date: 1464166080, what: 'instance ready' },
	    { date: 1464166260, what: 'DNS updated, pointing to our new instance.' } ]
    }, {
	what: 'general api outage',
	where: 'productiondr',
	why: 'lost 2 riak nodes in a couple minutes, while production is under maintenance / DR is acting as production',
	timeline: [
	    { date: 1460803620, what: 'nagios reports plan pending commit in 3 nodes and riak_check down in 2' },
	    { date: 1460803680, what: 'acknowledged, I connect to our 5 nodes. Thankfully, they are still all up. Riak is stopped in two of them' },
	    { date: 1460803740, what: 'restarting riak on my first faulty node failed. Stopping then starting worked' },
	    { date: 1460803800, what: 'stopping then starting riak on my second node worked. Cluster shows healthy, leaving it alone' },
	    { date: 1460804580, what: 'checking the client, turns out my active session is frozen, while Vincent reports that he can not log in. Reloading the foreground workers fixed' },
	    { date: 1460804700, what: 'in doubt, reloading our schedule, background and filemgr workers as well.' } ]
    }, {
	what: 'logs forwarding failure',
	where: 'aws_prod',
	why: 'logstash service stopped responding',
	timeline: [
	    { date: 1455582780, what: 'nagios reports an unusual delay processing logs' },
	    { date: 1455614640, what: 'process killed, service restarted, looking at the logs, we are asked to check our AWS-ES credentials.<br/>Configuration matches DR & staging, both restarted at the same time, both working' },
	    { date: 1455617280, what: 'I had to send production logs to a new index, keeping the rest of my AWS-ES backend configuration: no more error in our logs' },
	    { date: 1459695222, what: 'after a few flaps between logstash and AWS-ES, we finally installed our own elasticsearch cluster in EC2.' } ]
    }, {
	what: 'riak host failure',
	where: 'productiondr',
	why: 'on-disk file corruption',
	timeline: [
	    { date: 1455471660, what: 'nagios reports host unreachable, our riak init node is actually rebooting' },
	    { date: 1455492900, what: 'nagios reports host unreachable, no reboot this time, host checks failing from AWS console' },
	    { date: 1455527700, what: 'waking up, I notice nagios alerts, floh also warned me on slack' },
	    { date: 1455527760, what: 'stopping our instance on AWS' },
	    { date: 1455528780, what: 'issue opened with Basho' },
	    { date: 1455530820, what: 'instance shows as stopped on AWS, restarting it' },
	    { date: 1455531480, what: 'cluster back up and running, logs showing CRC errors occured, none that I could find after reboot.' } ]
    }, {
	what: 'riak host failure',
	where: 'productiondr',
	why: 'on-disk file corruption',
	timeline: [
	    { date: 1454870460, what: 'nagios reports host unreachable, our riak init node is actually rebooting' },
	    { date: 1454875080, what: 'nagios reports host unreachable, our riak init node is rebooting again' },
	    { date: 1454876760, what: 'nagios reports host unreachable, our riak init node is rebooting again' },
	    { date: 1454925060, what: 'waking up, I notice a lot of CRC errors in riak logs' },
	    { date: 1454943060, what: 'issued open with Basho' },
	    { date: 1454957400, what: 'reply from Basho, explaining how to manually repair faulty objects' },
	    { date: 1454957640, what: 'unable to apply Basho recommendations, as I could not find any corrupted object remaining.' } ]
    }, {
	what: 'logs forwarding failure',
	where: 'productiondr',
	why: 'logstash service stopped responding',
	timeline: [
	    { date: 1452810780, what: 'nagios reports an unusual delay processing logs' },
	    { date: 1452810900, what: 'service restarted, looking at the logs, no change' },
	    { date: 1452814800, what: 'problem identified, logstash init script does not stop logstash process' },
	    { date: 1452815040, what: 'logstash properly restarted, nagios confirms messages are being processed' },
	    { date: 1459695222, what: 'after a few flaps, we finally installed our own elasticsearch cluster in EC2.' } ]
    }, {
	what: 'codedeploy almost-gedon',
	where: 'staging',
	why: 'disks inode usage reaching 99%',
	timeline: [
	    { date: 1452032580, what: 'munin graphs showing inode usage reached 90% on our background staging worker' },
	    { date: 1452039120, what: 'munin graphs showing inode usage reached 90% on our foreground staging worker' },
	    { date: 1452118260, what: 'I finally notice munin reports 99% inode usage on both instances' },
	    { date: 1452118860, what: 'after autopurging packages with no real effect, I identified the source of our problem:<br/>CodeDeploy backups piles up in /var/www/peerio-server/shared/backup.<br/>Purging backups from december freed 72% inodes - and 14G' },
	    { date: 1452120360, what: 'quick fix to prevent this from happening again (<a href="https://github.com/PeerioTechnologies/peerio-ansible/commit/34185226fca8ee4a7145af39faa7ff262a17051c" target="_blank">1</a>, <a href="https://github.com/PeerioTechnologies/peerio-ansible/commit/e6b5ca4834c79260521703c73daff31db73c471e" target="_blank">2</a>).' } ]
    }, {
	what: 'general api outage',
	where: 'aws_prod',
	why: 'authentication service unavailable',
	timeline: [
	    { date: 1451556360, what: 'background worker restarting in a loop' },
	    { date: 1451566500, what: 'problem identified, ElastiCache is full, pretty much everything involving auth tokens is affected' },
	    { date: 1451566680, what: 'DR is not affected, route53 records updated, service back up' },
	    { date: 1451579160, what: 'production ElastiCache fixed, server code patched' },
	    { date: 1451580000, what: 'route53 records restored, new connections started moving back from DR to production' },
	    { date: 1451624100, what: 'last client disconnected from DR, everyone is back on production.' } ]
    } ];
