var outages = [
    {
	what: 'public blobs outage',
	where: 'staging',
	why: 'unscheduled termination of our blob instance',
	timeline: [
	    { date: 1468380240, what: 'icinga2 reports our blob worker stopped responding' },
	    { date: 1468380600, what: 'system is booted, ansible notifies us it is configuring our new instance' },
	    { date: 1468381140, what: 'codedeploy starts deploying peerio-server, peerio-inferno and peerio-haunted-house to our new instance' },
	    { date: 1468381560, what: 'ansible notifies us our new system is configured' },
	    { date: 1468381920, what: 'codedeploy terminates our new instances, not being able to deploy peerio-inferno and peerio-haunted-house' },
	    { date: 1468382160, what: 'having disabled inferno and haunted house deployments, new system is booted, ansible notifies us it is configuring our new instance' },
	    { date: 1468382760, what: 'codedeploy starts deploying peerio-server to our new instance' },
	    { date: 1468382880, what: 'codedeploy is done restoring peerio-server' },
	    { date: 1468383300, what: 'ansible notifies us our new system is configured' },
	    { date: 1468384020, what: 'after a couple fixes to our repository, peerio-haunted-house is deployed back to our new instance' },
	    { date: 1468384260, what: 'after a couple fixes to our repository, peerio-inferno is deployed back to our new instance' },
	    { date: 1468384380, what: 'haproxy detected our new backend as healthy, our monitoring is back to green, re-enabling peerio-inferno and peerio-haunted-house deployments' },
	    { date: 1468385700, what: 'shipped peerio-haunted-house latest changes to production' },
	    { date: 1468386240, what: 'shipped peerio-inferno latest changes to production.' } ]
    }, {
	what: 'accounts management portal unavailable',
	where: 'staging',
	why: 'unscheduled termination of our shark instance',
	timeline: [
	    { date: 1468265580, what: 'icinga2 reports our shark worker stopped responding' },
	    { date: 1468265640, what: 'replacement instance is starting on EC2' },
	    { date: 1468265820, what: 'system is booted, ansible notifies us it is configuring our new instance' },
	    { date: 1468266360, what: 'ansible notifies us our new system is configured' },
	    { date: 1468266540, what: 'codedeploy notifies us the last working version of our accounts management site was properly deployed to our new instance' },
	    { date: 1468266600, what: 'haproxy detected our new backend as healthy, our monitoring is back to green.' } ]
    }, {
	what: 'public blobs partial outage',
	where: 'aws_prod',
	why: 'packet losses one of our loadbalancer serving blob.peerio.com (files)',
	timeline: [
	    { date: 1468253880, what: 'icinga2 reports several probes recovering on one of our front balancer serving blob.peerio.com' },
	    { date: 1468253940, what: 'everything looks fine, keeping a top running in doubt' },
	    { date: 1468254600, what: 'icinga2 reports an other bunch of recoveries. My shell is mostly unresponsive. Smokeping confirms up to 29% packet losses to this instance' },
	    { date: 1468254660, what: 'I can confirm Route53 is no longer routing queries to blob.peerio.com to this server' },
	    { date: 1468254900, what: 'Smokeping confirms we are no longer suffering from these network losses, Route53 is routing back clients to this balancer' },
	    { date: 1468256100, what: 'icinga2 reports an other bunch of recoveries. Smokeping confirms losses again, although more discrete' },
	    { date: 1468256580, what: 'Smokeping confirms we are no longer suffering from these network losses.' } ]
    }, {
	what: 'general api outage',
	where: 'staging',
	why: 'unscheduled termination of our foreground instance, while the template being referred to in the corresponding LC was faulty',
	timeline: [
	    { date: 1468104120, what: 'uptimeRobot, statusCake & icinga2 report staging is down' },
	    { date: 1468127580, what: 'I wake up to realize our foreground ASG in staging has been replacing instances in a loop for several hours. I connect to the instance currently booting' },
	    { date: 1468128540, what: 'It appears CodeDeploy is invoking apt a little before our rc.local cuisine, which most of the time prevents ansible from starting. Still, 12 instances did report starting applying our ansible playbooks' },
	    { date: 1468130880, what: 'After building a new AMI purging CodeDeploy agent, creating a new LC, updating our faulty ASG, a new instance starts to boot' },
	    { date: 1468132320, what: 'Instance is properly deployed, CodeDeploy is installed and starts once NodeJS, pm2 & nginx are pre-configured, the last working version of peerio-server was properly deployed, service is back up' },
	    { date: 1468140480, what: 'Boot time was longer than intended: after building an other AMI with more pre-installed packages, booting a new instance' },
	    { date: 1468140960, what: 'done booting. Replacing all LC referring to our faulty AMI' },
	    { date: 1468151100, what: 'done cleaning up.' } ]
    }, {
	what: 'public site partial outage',
	where: 'aws_prod',
	why: 'an EC2 instance stopped responding',
	timeline: [
	    { date: 1467806640, what: 'icinga2 notifies us that our site instance stopped responding to ICMP requests. CloudFlare allowed us to configure www.peerio.com as a CNAME to some Route53-managed name, whereas peerio.com is an A record. Our site was served from DR for users querying www.peerio.com, not those accessing peerio.com' },
	    { date: 1467806820, what: 'AWS shows our unresponsive instance as unhealthy. Stopping it from their console, updating CloudFlare records to have peerio.com pointing to our DR setup' },
	    { date: 1467808320, what: 'our production instance still shows as stopping, running stop again (force-stop)' },
	    { date: 1467808860, what: 'our production instance now shows as stopped. Starting it back' },
	    { date: 1467808980, what: 'our production instance is back up. Updating Route53\'s health check and hosted zones referring to our new production IP' },
	    { date: 1467809280, what: 'Route53 health checks confirm our production instance is healthy, setting back peerio.com record on CloudFlare to our production instance' },
	    { date: 1467809640, what: 'setting up Page Rules in CloudFlare, rewriting queries for peerio.com to www.peerio.com.' } ]
    }, {
	what: 'notifications outage',
	where: 'productiondr',
	why: 'slack outage',
	timeline: [
	    { date: 1467233880, what: 'having started a deployment to our DR setup, I was unable to connect to slack' },
	    { date: 1467234000, what: 'I am able to connect from my phone, although we did not receive a single notification' },
	    { date: 1467234240, what: 'Situation is back to normal, although half of our deployment notifications and monitoring alerts got lost. We would need to detect this and eventually go back to sending SMS notifications in such cases.' } ]
    }, {
	what: 'logs collection outage',
	where: 'aws_prod',
	why: 'unscheduled termination of our logstash instance',
	timeline: [
	    { date: 1466699220, what: 'icinga2 reports our production logstash instance is down. No incidence on service whatsoever' },
	    { date: 1466699400, what: 'logging into aws console, we can confirm the corresponding EC2 instance is being terminated. No explanation available. The corresponding AutoScale Group already spawned a replacement instance, we just need to wait for Ansible to do its job' },
	    { date: 1466700360, what: 'situation is back to normal.' } ]
    }, {
	what: 'partial api outage',
	where: 'productiondr',
	why: 'scheduled replacement of our redis master',
	timeline: [
	    { date: 1466445780, what: 'icinga reports one of our load-balancer is returning with 503 errors, route53 did the job as StatusCake and UptimeRobot both show a 100% uptime on DR' },
	    { date: 1466470920, what: 'noticing the warning, turns out one of our websocket worker is neither dead nor alive' },
	    { date: 1466470980, what: 'AWS did warn us a while ago, that they would be replacing the master instance from our ElastiCache cluster. Reloading our NodeJS process fixed. Pending further investigations as per why that process did not crash as expected.' } ]
    }, {
	what: 'mysql node down',
	where: 'productiondr',
	why: 'probably some hardware failure on AWS part',
	timeline: [
	    { date: 1466037840, what: 'icinga2 reports one of our mysql node is down. No incidence on service whatsoever' },
	    { date: 1466038020, what: 'trying to stop our faulty VM from AWS console' },
	    { date: 1466038440, what: 'instance stopped. Starting it back' },
	    { date: 1466038560, what: 'node back up, cluster is back to 3 nodes.' } ]
    }, {
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
