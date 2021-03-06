var outages = [
    {
	what: 'unscheduled instance reboot',
	where: 'staging',
	why: 'ceph monitor unreachable',
	timeline: [
	    { date: 1513323780, what: 'Nagios warns us a Ceph MON instance stopped responding to ICMP requests' },
	    { date: 1513325940, what: 'Nagios notifies us our faulty instance is back up' },
	    { date: 1513327320, what: 'Nagios confirms most our probes show healthy' },
	    { date: 1513327980, what: 'Last checks confirming Ceph cluster is healthy back' },
	    { date: 1513348860, what: 'Waking up, nothing much I can do, confirmed instance did reboot, unclear on the reason why. Running 3 MON, this failure had no implications on daily operations.' } ]
    }, {
	what: 'scheduled maintenance',
	where: 'productiondr',
	why: 'migrating database from riak to cassandra',
	timeline: [
	    { date: 1509415500, what: 'Moving websocket, accounts, mails and blobs public DNS records, pointing them temporarily to our website' },
	    { date: 1509416280, what: 'Shutting down our loadbalancers, cutting all accesses to service' },
	    { date: 1509417240, what: 'Shutting down our nodejs workers, stopping all write accesses to Riak' },
	    { date: 1509433260, what: 'Booting new DR background worker, running on Debian Stretch, connecting to new Redis setup, as well as Cassandra instead of Riak' },
	    { date: 1509435000, what: 'Done deploying peerio to our background worker, booting our first frontend worker' },
	    { date: 1509436140, what: 'Done deploying peerio to our first frontend worker, background worker done deploying our full playbook, booting our second frontend worker' },
	    { date: 1509437040, what: 'Done deploying peerio to our second frontend worker, first frontend worker done deploying full playbook' },
	    { date: 1509437100, what: 'Restoring productiondr websocket, accounts, mails and blobs public DNS records' },
	    { date: 1509437280, what: 'Restarting HAproxy balancers, restoring DR normal activites - serving as a backup, should production fail' },
	    { date: 1509438120, what: 'StatusCake and UptimeRobot confirmed they were able to query our health check URLs back.' } ]
    }, {
	what: 'scheduled maintenance',
	where: 'aws_prod',
	why: 'migrating database from riak to cassandra',
	timeline: [
	    { date: 1509415500, what: 'Moving websocket, accounts, mails and blobs public DNS records, pointing them temporarily to our website' },
	    { date: 1509416280, what: 'Frontend workers logs confirm most users disconnected, the remaining ones are inactive: shutting down our loadbalancers' },
	    { date: 1509417240, what: 'Background workers logs confirm we are done processing whatever queued jobs we had to deal with, now shutting down our nodejs workers' },
	    { date: 1509419400, what: 'Done dumping Riak database to JSON files' },
	    { date: 1509419760, what: 'Done checking for errors in dump logs' },
	    { date: 1509420240, what: 'Done importing dump into Cassandra cluster' },
	    { date: 1509420480, what: 'Reconfigured our preprod workers connecting to our production database and keyspace' },
	    { date: 1509426600, what: 'Done validating release is ready to be shipped' },
	    { date: 1509429000, what: 'Done merging staging branches into masters, CircleCI done testing and preparing CodeDeploy release' },
	    { date: 1509429300, what: 'Booting new production background worker, running on Debian Stretch, connecting to new Redis setup, as well as Cassandra instead of Riak' },
	    { date: 1509429480, what: 'Codedeploy playbook done applying, now waiting for CodeDeploy agent to apply our last valid release to our new worker' },
	    { date: 1509430140, what: 'Codedeploy done installing our last backend package then applying ansible playbook configuring and starting our NodeJS processes' },
	    { date: 1509430320, what: 'Main ansible playbook now being applied to our new background worker. Meanwhile, starting our first frontend NodeJS worker instance' },
	    { date: 1509430980, what: 'Codedeploy playbook done applying on first frontend worker, now waiting for CodeDeploy agent to do its thing' },
	    { date: 1509431460, what: 'Background worker done deploying' },
	    { date: 1509431520, what: 'Booting second frontend worker' },
	    { date: 1509431880, what: 'Codedeploy playbook done applying on second frontend worker, now waiting for CodeDeploy agent to finish deploying our last worker' },
	    { date: 1509432600, what: 'Main ansible playbook now being applied to our first frontend worker' },
	    { date: 1509433440, what: 'First frontend worker done deploying' },
	    { date: 1509433800, what: 'Main ansible playbook now being applied to our second frontend worker' },
	    { date: 1509434160, what: 'Restarting HAproxy on our first balancer' },
	    { date: 1509434220, what: 'HighWayToHell first to confirm our first balancers is available back, nagios back to green' },
	    { date: 1509434280, what: 'Restoring production websocket, accounts, mails and blobs public DNS records' },
	    { date: 1509434520, what: 'Restarting HAproxy on our second balancer, restoring access for users' },
	    { date: 1509434640, what: 'Second frontend worker done deploying' },
	    { date: 1509436020, what: 'StatusCake and UptimeRobot confirmed they were able to query our health check URLs back.' } ]
    }, {
	what: 'front balancer stopped responding',
	where: 'staging',
	why: 'unscheduled instance reboot',
	timeline: [
	    { date: 1509079740, what: 'Uptime Robot marked our Staging services down' },
	    { date: 1509079800, what: 'Nagios warns us about our loadbalancer not responding' },
	    { date: 1509080160, what: 'Having detached instance from its ASG, shutting it down from AWS console' },
	    { date: 1509080700, what: 'Instance shows stopped on AWS console, starting it back up' },
	    { date: 1509080820, what: 'HAproxy service back up, workers backends marked healthy' },
	    { date: 1509081300, what: 'Nagios done marking our services healthy.' } ]
    }, {
	what: 'syslog collector stopped responding',
	where: 'aws_prod',
	why: 'unscheduled instance reboot',
	timeline: [
	    { date: 1509059220, what: 'Nagios starts notifying us regarding our production Logstash relay being unavailable' },
	    { date: 1509059340, what: 'Confirmed host does not PING from our management VPN, connecting to AWS console to investigate further' },
	    { date: 1509059940, what: 'Nagios notifies us host is back up. Connecting, its uptime confirmed host had rebooted' },
	    { date: 1509060420, what: 'Nagios done marking that host services healthy.' } ]
    }, {
	what: 'websocket partial outage',
	where: 'productiondr',
	why: 'network losses to azure on us-west-2',
	timeline: [
	    { date: 1508598780, what: 'UptimeRobot starts notifying us regarding our DR websocket service returning with 500 errors' },
	    { date: 1508598840, what: 'Problem is related to our workers not being able to consistently reach Azure blob storage service' },
	    { date: 1508598900, what: 'Nagios notifying us as well' },
	    { date: 1508599140, what: 'Monitoring is back to green.' } ]
    }, {
	what: 'DR partial outage',
	where: 'productiondr',
	why: 'unscheduled loadbalancer termination',
	timeline: [
	    { date: 1508589600, what: 'Receiving a Slack notification from a new loadbalancer booting' },
	    { date: 1508589720, what: 'Could not figure out which instances was being replaced, all our loadbalancers are still reachable and seems to be working fine' },
	    { date: 1508590320, what: 'Nagios warns us one of our loadbalancer has gone missing, corresponding SSH session is no longer responding' },
	    { date: 1508590860, what: 'Ansible finished applying our HAproxy playbook to new loadbalancer, route53 records and health checks were properly registered' },
	    { date: 1508591520, what: 'Done manually removing references to our former balancer from Route53 health checks & records' },
	    { date: 1508592900, what: 'Ansible finished applying main playbooks to new loadbalancer.' } ]
    }, {
	what: 'DR outage',
	where: 'productiondr',
	why: 'packet losses on us-west-2',
	timeline: [
	    { date: 1508315760, what: 'Our IPSEC gateway in production notifies us (slack) that our tunnel to DR was just restarted' },
	    { date: 1508315880, what: 'Our IPSEC gateway in production notifies us that our tunnel to DR was just restarted' },
	    { date: 1508316000, what: 'Our IPSEC gateway in production notifies us that our tunnel to DR was just restarted' },
	    { date: 1508316001, what: 'Our IPSEC gateway in staging notifies us that our tunnel to DR was just restarted' },
	    { date: 1508316060, what: 'Our IPSEC gateway in production notifies us that our tunnel to DR was just restarted' },
	    { date: 1508316120, what: 'Our IPSEC gateway in production notifies us that our tunnel to DR was just restarted' },
	    { date: 1508316120, what: 'Nagios kicks in, Production monitor reports DR services as unreachable, and vice-versa' },
	    { date: 1508316660, what: 'Slack getting spammed by Nagios eventually pulled me out of my sleep. At first sight: even without passing through IPSEC tunnels, I am no longer able to SSH to our DR IPSEC gateway public IP: connecting to AWS console' },
	    { date: 1508316840, what: 'Being logged into AWS, we can confirm that all our instances in DR are listed as healthy. Meanwhile, my ssh requests to our IPSEC gateway eventually started getting responses, ... IPSEC tunnel from Production to DR is properly running, cronjobs did what they had to do, although our tunnel from Staging to DR is refusing to start back, leading to most of our Slack notifications' },
	    { date: 1508317020, what: 'StatusCake starts notifying us about our WebSocket and Blob webservices being unavailable on DR' },
	    { date: 1508317080, what: 'UptimeRobot notifies us as well, meanwhile I could confirm that last issue has to do with our NodeJS processes considering Azure blob storage to be flappy, as we are still suffering from packet losses in and out of us-west-2' },
	    { date: 1508317740, what: 'Network looks "stable enough" right now, restarting all NodeJS processes on DR, forcing our health checks history to forget about previous flaps' },
	    { date: 1508317800, what: 'Our IPSEC tunnel connecting Staging to DR is back, for some reason, after forcing it down and up several times, ...' },
	    { date: 1508318040, what: 'StatusCake starts confirming our DR services are back up' },
	    { date: 1508319120, what: 'All our probes are showing back healthy, although we would keep a close eye on us-west-2 in the next hours, watching for network losses, ...' } ]
    }, {
	what: 'OldBear riak outage',
	where: 'aws_prod',
	why: 'unresponsive EC2 instance',
	timeline: [
	    { date: 1508207100, what: 'AWS emails us regarding some hardware issue involving a server hosting one of our Riak node serving OldBear, we originally had until October 31st to schedule a reboot' },
	    { date: 1508212920, what: 'Nagios notifies us our Riak instance just went down' },
	    { date: 1508212980, what: 'We were expecting this: shrinking down our cluster to 3 nodes. As OldBear is scheduled for termination by 2018, and since half of our active users did migrate, we should not need to spawn a replacement node' },
	    { date: 1508213100, what: 'Faulty instance successfully removed from our cluster, Nagios back to green.' } ]
    }, {
	what: 'riak outage',
	where: 'productiondr',
	why: 'unresponsive EC2 instance',
	timeline: [
	    { date: 1508025960, what: 'Nagios notifies us one of our Riak node went down, connecting to AWS' },
	    { date: 1508026200, what: 'Stopping instance' },
	    { date: 1508026440, what: 'Instance shows stopped, restarting it' },
	    { date: 1508026500, what: 'Riak back up, Nagios starts to confirm service is back up' },
	    { date: 1508026740, what: 'All probes back to green.' } ]
    }, {
	what: 'websocket partial outage',
	where: 'productiondr',
	why: 'network losses to azure on us-west-2',
	timeline: [
	    { date: 1507849920, what: 'Nagios warns us a blob worker is unhealthy' },
	    { date: 1507849980, what: 'Checking logs, we can see Azure was unreachable for a little while' },
	    { date: 1507850100, what: 'Restarting processes in doubt, marking service healthy.' } ]
    }, {
	what: 'websocket partial outage',
	where: 'awsprod',
	why: 'unresponsive EC2 instance',
	timeline: [
	    { date: 1507480380, what: 'Nagios warns us a front loadbalancer is unreachable, production is now being served by a single availability zone' },
	    { date: 1507480500, what: 'Having connected to AWS console, my ping to that loadbalancer started receiving replies' },
	    { date: 1507480620, what: 'Nagios confirms everything is back up, although warns us loadlabalcer just rebooted' },
	    { date: 1507480860, what: 'Checking syslog messages, some files are corrupted and missing messages, while non-syslog logs do show service being terminated via init. Munin does not show any unexpected activity, unclear what went on...' },
	    { date: 1507481160, what: 'Nagios back to green.' } ]
    }, {
	what: 'accounts management portal partial outage',
	where: 'productiondr',
	why: 'network losses on us-west-2',
	timeline: [
	    { date: 1505998680, what: 'Nagios warns us a shark worker is unhealthy' },
	    { date: 1505998800, what: 'Back to green. Checking logs, we can see MySQL was unreachable for a little while' },
	    { date: 1505998920, what: 'MySQL logs do not show anything unusual' },
	    { date: 1505999400, what: 'Another shark worker showing unhealthy, again MySQL was marked unreachable' },
	    { date: 1505999820, what: 'Service marked back healthy.' } ]
    }, {
	what: 'backup storage partial outage',
	where: 'staging',
	why: 'unresponsive EC2 instance',
	timeline: [
	    { date: 1505668020, what: 'Nagios warns us a Ceph OSD became unreachable' },
	    { date: 1505668380, what: 'Having logged into AWS console, instance shows unresponsive, shutting it down' },
	    { date: 1505669220, what: 'Instance shows stopped, starting it back up' },
	    { date: 1505669520, what: 'Nagios confirms our OSD is back up and Ceph health is back to green.' } ]
    }, {
	what: 'websocket partial outage',
	where: 'awsprod',
	why: 'unresponsive EC2 instance',
	timeline: [
	    { date: 1505623800, what: 'HighWayToHell notifies us one of our front workers services are unreachable' },
	    { date: 1505623860, what: 'Corresponding worker does not respond to ping, connecting to AWS console' },
	    { date: 1505623920, what: 'Nagios confirms our worker is unreachable' },
	    { date: 1505624100, what: 'Having logged into AWS console, instance shows unresponsive. No replacement instance booting, detaching faulty worker from its ASG and shutting it down' },
	    { date: 1505625900, what: 'Instance shows stopped, starting it back up' },
	    { date: 1505626260, what: 'HighWayToHell and Nagios confirm our worker is back up, re-attaching EC2 instance to its ASG.' } ]
    }, {
	what: 'Scheduled workers restart',
	where: 'awsprod',
	why: 'shipping a new client release, preventing former copies to connect',
	timeline: [
	    { date: 1505505180, what: 'Shutting down frontend workers, forcing running sessions to close' },
	    { date: 1505505240, what: 'Deprecating older client versions, while releasing them to AppStore, PlayStore and GitHub' },
	    { date: 1505505360, what: 'Restarting frontend workers.' } ]
    }, {
	what: 'DR outage',
	where: 'productiondr',
	why: 'azure service partially unavailable',
	timeline: [
	    { date: 1502443740, what: 'Nagios notifies us all our DR workers are returning with a 500 error' },
	    { date: 1502444040, what: 'According to nagios, probes are back to green' },
	    { date: 1502445540, what: 'Nagios notifies us again, 500 errors are back' },
	    { date: 1502445780, what: 'Again, problem solved itself' },
	    { date: 1502446320, what: 'Waking up, our NodeJS logs show that, from that DR setup, Azure service is likely to get unavailable. There is not much I can do...' } ]
    }, {
	what: 'Ceph RadosGateway partial outage',
	where: 'staging',
	why: 'unresponsive EC2 instance',
	timeline: [
	    { date: 1501551540, what: 'Nagios notifies us a Rados Gateway stopped responding - a second one still being alive: no incidence for end users' },
	    { date: 1501551780, what: 'From AWS console, instance shows unhealthy. Forcing it to stop' },
	    { date: 1501552020, what: 'Instance shows as stopped, starting it back' },
	    { date: 1501552200, what: 'Nagios probes all back to green.' } ]
    }, {
	what: 'IceBear Balancers partial outage',
	where: 'productiondr',
	why: 'unscheduled termination of some Haproxy node',
	timeline: [
	    { date: 1501106160, what: 'Nagios notifies us a balancer stopped responding - a second one still being alive, DR was not active: no incidence for end users' },
	    { date: 1501106220, what: 'From AWS console, instance shows unhealthy. ASG did not replace it though, forcing faulty instance termination' },
	    { date: 1501106340, what: 'New instance listed in AWS console' },
	    { date: 1501106520, what: 'Receiving a Slack notification confirming Ansible started applying our HAproxy playbook on that new instance' },
	    { date: 1501106760, what: 'HAproxy role applied, service is back up' },
	    { date: 1501108200, what: 'Ansible done applying main playbook, nagios probes all back to green.' } ]
    }, {
	what: 'redis outage',
	where: 'awsprod',
	why: 'keyspace exhaustion',
	timeline: [
	    { date: 1501000920, what: 'Nagios notifies us our NodeJS processe are starting to show unhealthy' },
	    { date: 1501000980, what: 'Logs are showing that redis memory usage is reaching its limits. Issue was known of, a cron job was added a while ago, although it did not reach prod yet' },
	    { date: 1501001160, what: 'UptimeRobot reports our Production to be unavailable. DR should still be reachable, and have taken over' },
	    { date: 1501001340, what: 'Having uploaded our fix from staging to production and executing it, our Redis backend quickly started refusing new connections and closing existing ones. Our whole production crashed. Cleanup was partial when I managed to kill it, backend devs are notified, pending some actual fix' },
	    { date: 1501001760, what: 'NodeJS processes are all back, UptimeRobot and StatusCake confirmed Production is available.' } ]
    }, {
	what: 'mysql outage',
	where: 'awsprod',
	why: 'scheduled instance reboot, then failing health checks',
	timeline: [
	    { date: 1498450980, what: 'Nagios notifies us one of our MySQL instance went down. AWS did warn us a reboot was scheduled there, within that time frame' },
	    { date: 1498451100, what: 'Instance is back up, although our NodeJS health checks start complaining about MySQL being unavailable - which is weird, considering we have two nodes in Production, and an ELB that should deal with hosts being unavailable' },
	    { date: 1498468980, what: 'My own nagios is now warning me that both Shark balancers are showing unhealthy on Production. StatusCake and UptimeRobot confirm that account.peerio.com is still available via our DR setup' },
	    { date: 1498473120, what: 'Giving this a look while coping with our Riak outage on DR, I could confirm the MySQL Health Check service was crashed on both Production node. Although I was unable to restart it' },
	    { date: 1498474200, what: 'Having patched our MySQL Health Check service scripts, I was able to restart said service' },
	    { date: 1498474260, what: 'Production ELB has now marked both our MySQL nodes as healthy' },
	    { date: 1498474380, what: 'Nagios confirms our Shark workers have acknowledged their database being back' },
	    { date: 1498475040, what: 'My own nagios confirms our Production Shark balancers are showing back healthy.' } ]
    }, {
	what: 'riak outage',
	where: 'productiondr',
	why: 'unresponsive EC2 instance',
	timeline: [
	    { date: 1498468920, what: 'Nagios notifies us one of our Riak node went down' },
	    { date: 1498470780, what: 'Waking up and connecting to AWS console, EC2 instance is indeed showing as unresponsive. Stopping it' },
	    { date: 1498471380, what: 'Instance is still listed as Stopping. Requesting a force-stop' },
	    { date: 1498471980, what: 'Instance is still listed as Stopping. Requesting a force-stop' },
	    { date: 1498472760, what: 'Instance showing as stopped, now starting it back' },
	    { date: 1498472940, what: 'Connecting to our rebooted instance, I could confirm once again, Riak did not start. The first start returns an error, the second successfully start Riak' },
	    { date: 1498473420, what: 'Nagios confirms our Riak service is healthy back on DR.' } ]
    }, {
	what: 'riak outage',
	where: 'productiondr',
	why: 'unscheduled instance reboot',
	timeline: [
	    { date: 1498376220, what: 'Nagios notifies us one of our Riak node went down' },
	    { date: 1498377780, what: 'Nagios notifies us instance is back up, and was rebooted' },
	    { date: 1498378380, what: 'Most warnings cleared, although Riak refuses to start. Every five minutes, a cron job notifies us it failed restarting Riak' },
	    { date: 1498390080, what: 'No one seems to have noticed, bailing out on a wedding and jumping into the first train back home' },
	    { date: 1498414080, what: 'Restarting Riak service twice in a row was enough to get it back up. Weirdly enough, our cron job already runs that command 3 times in a row - as it is known to fail, and Basho blames it on some Systemctl bug in Debian Jessie, without having provided us with any kind of fix.' } ]
    }, {
	what: 'openvpn outage',
	where: 'staging',
	why: 'unresponsive EC2 instance',
	timeline: [
	    { date: 1497365400, what: 'Nagios notifies us our OpenVPN gateway went down, dev and management accesses are down' },
	    { date: 1497365580, what: 'From AWS console, shutting down instance' },
	    { date: 1497365640, what: 'OpenVPN instance was not using an Elastic IP, which means we would have to update our client configurations. Requesting an Elastic IP, to avoid further modifications' },
	    { date: 1497366120, what: 'Instance shows stopped, starting it back' },
	    { date: 1497366180, what: 'Assigning new IP to OpenVPN instance' },
	    { date: 1497366300, what: 'New instance back up. Reconfiguring IPSEC tunnels taking our new public IP into accounts' },
	    { date: 1497366840, what: 'IPSEC tunnels back up, notifying coworkers of configuration change (no DNS to that service)' },
	    { date: 1497384000, what: 'last IPSEC flap recovered by corresponding crontab, so far so good.' } ]
    }, {
	what: 'riakcs partial outage',
	where: 'staging',
	why: 'One unresponsive RiakCS instance',
	timeline: [
	    { date: 1497303000, what: 'Nagios notifies us a RiakCS went down' },
	    { date: 1497303360, what: 'Ansible notifies us a replacement node is booting' },
	    { date: 1497304920, what: 'Ansible notifies us our new RiakCS instance is ready' },
	    { date: 1497305400, what: 'Updated plan dropping faulty node and adding the new one.' } ]
    }, {
	what: 'riak outage',
	where: 'ice-bear',
	why: 'One unresponsive Riak instance and two crashed processes',
	timeline: [
	    { date: 1495922220, what: 'Nagios starts to notify us about some Riak process not responding' },
	    { date: 1495922280, what: 'New alerts notifying about an other Riak process not responding, and a third node not responding to ssh at all, UptimeRobot confirms our production front services are now showing unhealthy' },
	    { date: 1495922340, what: 'UptimeRobot confirms IceBear services are now back online: Route53 successfully failed over to DR' },
	    { date: 1495922640, what: 'StatusCake confirms our IceBear services on production are down' },
	    { date: 1495939560, what: 'Recovering my access to internet, I start reading through nagios notifications and restart Riak on the first node that failed' },
	    { date: 1495939680, what: 'First node back, restarting Riak on the second node' },
	    { date: 1495939800, what: 'Second node back, idenfied our unresponsive instance, shutting it down from AWS console' },
	    { date: 1495940100, what: 'Instance shows as shut down, now booting it back' },
	    { date: 1495940280, what: 'Nagios confirms our cluster is healthy back, although replication is still late' },
	    { date: 1495940520, what: 'Route53 health check confirm our production services are healthy' },
	    { date: 1495940580, what: 'StatusCake confirms our production IceBear services are healthy' },
	    { date: 1495941600, what: 'Replication back to green, all our probes show healthy' },
	    { date: 1496012400, what: 'After receiving several notifications from Icinga, regarding unusually high CPU usage on our production Riak cluster, starting a new cluster using larger instances' },
	    { date: 1496056740, what: 'Still receiving CPU usage alerts: forcing DNS failover to DR, shutting down replication between initial cluster an DR cluster, setting up replication between DR cluster and new production cluster' },
	    { date: 1496065440, what: 'Finishing to swap our Riak cluster, restoring DNS configuration routing clients to our Production setup' },
	    { date: 1496067300, what: 'First successful login on Production, we should be done with Riak, shutting down former cluster.' } ]
    }, {
	what: 'IceBear Balancers partial outage',
	where: 'productiondr',
	why: 'unscheduled termination of some Haproxy node',
	timeline: [
	    { date: 1495773780, what: 'Icinga reports one of our IceBear balancers is down. IceBear being a new set of services we should release any day, these had no implications on Peerio public services' },
	    { date: 1495774200, what: 'We receive confirmation our ASG did terminate the faulty instance and replaced it by a new one. Ansible deployment starting' },
	    { date: 1495774440, what: 'Done applying haproxy playbook, balancer is back up, new Route53 records and health checks registered. Main ansible playbook is now being applied' },
	    { date: 1495776000, what: 'Done applying main playbook' },
	    { date: 1495794120, what: 'Purged Route53 Records and Health Checks from references to the balancer that got terminated.' } ]
    }, {
	what: 'IPSEC gateway unavailable',
	where: 'aws_prod',
	why: 'unscheduled instance reboot',
	timeline: [
	    { date: 1495549440, what: 'IPSEC gateway starts rebooting, without any of us having scheduled it' },
	    { date: 1495549560, what: 'Instance is back up, IPSEC tunnels as well, Icinga notifies us of instance reboot' },
	    { date: 1495549740, what: 'Icinga back to green.' } ]
    }, {
	what: 'IceBear Balancers partial outage',
	where: 'productiondr',
	why: 'unscheduled termination of some Haproxy node',
	timeline: [
	    { date: 1495011720, what: 'Icinga reports one of our IceBear balancers is down. IceBear being a new set of services we should release any day, these had no implications on Peerio public services' },
	    { date: 1495011960, what: 'We receive confirmation our ASG did terminate the faulty instance and replaced it by a new one. Ansible deployment starting' },
	    { date: 1495012200, what: 'Done applying haproxy playbook, balancer is back up, new Route53 records and health checks registered. Main ansible playbook is now being applied' },
	    { date: 1495013700, what: 'Done applying main playbook' },
	    { date: 1495022520, what: 'Purged Route53 Records and Health Checks from references to the balancer that got terminated.' } ]
    }, {
	what: 'Websocket, Files & Ghost outage',
	where: 'staging',
	why: 'unresponsive EC2 instance',
	timeline: [
	    { date: 1492120680, what: 'StatusCake reports our Websocket service is unavailable' },
	    { date: 1492120860, what: 'Our Riak loadbalancer instance is unresponsive, stopping it from EC2 console' },
	    { date: 1492122060, what: 'Instance shows stopped, starting it back' },
	    { date: 1492122180, what: 'Haproxy is back healthy, restarting NodeJS processes' },
	    { date: 1492122480, what: 'All monitoring back to green.' } ]
    }, {
	what: 's3 and codedeploy outage, with no real incidence on production',
	where: 'aws_prod',
	why: 's3 outage on us-east-1',
	timeline: [
	    { date: 1488310500, what: 'We start noticing mentions of s3 being unavailable, and could confirm codedeploy was no longer able to perform, nor would we be able to start new instances. Production, IceBear, Staging and Labs are affected, DR is not' },
	    { date: 1488321360, what: 'AWS s3 is mostly back, although we are missing some files. Nothing critical, we should be able to start new instances already' },
	    { date: 1488332280, what: 'CodeDeploy is back, missing files have been uploaded back, we are still unable to drop some empty folder - that was not here before outage. Turns out my Basic support plan does not allow me to open a technical support request. I guess it would stay like this...' } ]
    }, {
	what: 'Cloudbleed Aftermaths',
	where: 'aws_prod',
	why: 'Cloudbleed',
	timeline: [
	    { date: 1487887260, what: 'On February 23rd, <a href="https://blog.cloudflare.com/incident-report-on-memory-leak-caused-by-cloudflare-parser-bug/" target="_blank">Cloudflare discloses Cloudbleed</a>, a bug introduced on 2016 September 22nd. Only 180 sites would have been affected, until February 13th. Then, due to an update, the problem would have reached over 6.000 sites, and was triggered over a million times. This bug was reported by <a href="https://bugs.chromium.org/p/project-zero/issues/detail?id=1139" target="_blank">Google Project Zero</a> team on February 17th and fixed within a few hours.<br/>In regards to Peerio, offering with end-to-end encryption, we do not rely on HTTPs to ensure customers communications privacy. Every data you fetch from and store to Peerio services is encrypted using your key pair. For the record, our API specification is available <a href="https://github.com/PeerioTechnologies/peerio-client/blob/master/SPECIFICATION.md" target="_blank">on GitHub</a>.<br/>Cloudflare latter <a href="https://blog.cloudflare.com/quantifying-the-impact-of-cloudbleed" target="_blank">confirmed Cloudbleed most likely was not exploited</a>. Whereas we can confirm we did not record any abusive accesses to our services.' } ]
    }, {
	what: 'updates intermittent outage',
	where: 'ice-bear',
	why: 'Nuts losing connection to GitHub',
	timeline: [
	    { date: 1487512860, what: 'Nagios warns us our websocket service is returning with 502 errors' },
	    { date: 1487512920, what: 'Nuts logs are showing failures to connect to GitHub, service is mostly up, yet flapping from time to time' },
	    { date: 1487515440, what: 'Failures are occuring on a single worker, raising frequency, restarting Nuts processes' },
	    { date: 1487515500, what: 'UptimeRobot and Nagios stopped flapping.' } ]
    }, {
	what: 'websocket outage',
	where: 'ice-bear',
	why: 'GitHub outage',
	timeline: [
	    { date: 1485626040, what: 'UptimeRobot warns us our websocket service is returning with 500 errors' },
	    { date: 1485626100, what: 'Checking, it appears a colleague is uploading files, and used up all available space in our single worker temporary chunks storage, which eventually marked itself unhealthy' },
	    { date: 1485626160, what: 'Purged chunks from our worker, health check is now returning with a network error, which is due to some service flapping or unavailable for a few minutes - our chunks. Waiting for our worker to mark itself healthy back' },
	    { date: 1485626760, what: 'UptimeRobot & StatusCake confirmed our websocket service is back up.' } ]
    }, {
	what: 'update service unavailable',
	where: 'ice-bear',
	why: 'GitHub outage',
	timeline: [
	    { date: 1484208480, what: 'StatusCake warns us our code update site is unreachable' },
	    { date: 1484212380, what: 'StatusCake confirms our code update site is back up' },
	    { date: 1484226720, what: 'Waking up, nothing much to do, GitHub status page shows their app server was down this morning. Now back up.' } ]
    }, {
	what: 'services flapping',
	where: 'aws_prod',
	why: 'CloudFlare Leap-Second outage',
	timeline: [
	    { date: 1483228260, what: 'Our site is unreachable from UptimeRobot servers. No alerts from our EC2-hosted nagios' },
	    { date: 1483228320, what: 'Site shows back up' },
	    { date: 1483229700, what: 'Site is unreachable from UptimeRobot' },
	    { date: 1483229820, what: 'Site shows back up' },
	    { date: 1483230780, what: 'Piwik is unreachable from UptimeRobot' },
	    { date: 1483230840, what: 'Piwik shows back up' },
	    { date: 1483246500, what: 'Piwik is unreachable from UptimeRobot' },
	    { date: 1483246560, what: 'Piwik shows back up' },
	    { date: 1483268400, what: 'All services affected are served through CloudFlare, see <a href="https://blog.cloudflare.com/how-and-why-the-leap-second-affected-cloudflare-dns/" target="_blank">corresponding blog post</a>.' } ]
    }, {
	what: 'services flapping',
	where: 'productiondr',
	why: 'CloudFlare Leap-Second outage',
	timeline: [
	    { date: 1483228200, what: 'Our inferno service is unreachable from UptimeRobot servers. No alerts from our EC2-hosted nagios' },
	    { date: 1483228260, what: 'Inferno shows back up' },
	    { date: 1483228560, what: 'Inferno is unreachable from UptimeRobot' },
	    { date: 1483228620, what: 'Inferno shows back up' },
	    { date: 1483229040, what: 'Inferno is unreachable from UptimeRobot' },
	    { date: 1483229100, what: 'Inferno shows back up' },
	    { date: 1483229400, what: 'Inferno is unreachable from UptimeRobot' },
	    { date: 1483229460, what: 'Inferno shows back up' },
	    { date: 1483268400, what: 'All services affected are served through CloudFlare, see <a href="https://blog.cloudflare.com/how-and-why-the-leap-second-affected-cloudflare-dns/" target="_blank">corresponding blog post</a>.' } ]
    }, {
	what: 'riak outage',
	where: 'ice-bear',
	why: 'Couple Riak instances are unresponsive',
	timeline: [
	    { date: 1481469840, what: 'Following an other upload test, we have now lost two Riak nodes, ssh no longer responds' },
	    { date: 1481470560, what: 'Having logged into AWS console, detached our faulty instances from their ASG, we try shutting them down' },
	    { date: 1481470680, what: 'First instances shows stopped, starting it back' },
	    { date: 1481470920, what: 'Riak loadbalancer shows healthy again, our front workers should be able to work from there' },
	    { date: 1481471040, what: 'Second instance shows stopped, starting it back' },
	    { date: 1481471100, what: 'Re-attaching our Riak nodes to their ASG' },
	    { date: 1481471160, what: 'UptimeRobot confirms service is back up.' } ]
    }, {
	what: 'riak outage',
	where: 'ice-bear',
	why: 'Riak crashed on some Riak node, couple other instances are unresponsive',
	timeline: [
	    { date: 1481469000, what: 'A crontab notifies us Riak was restarted on some staging instance' },
	    { date: 1481469120, what: 'We are unable to connect to two of our Riak nodes' },
	    { date: 1481469180, what: 'UptimeRobot notifies us some staging service became unavailable' },
	    { date: 1481469300, what: 'Same crontab notifies us Riak was restarted on our fourth instance' },
	    { date: 1481469420, what: 'Our second node is now available, without having restarted it. Load goes through the roof, IOs' },
	    { date: 1481469480, what: 'Same goes for our third node, that joined back in by itself' },
	    { date: 1481469600, what: 'UptimeRobot confirms service is back up.' } ]
    }, {
	what: 'websocket outage',
	where: 'ice-bear',
	why: 'Broken release successfully deployed',
	timeline: [
	    { date: 1481309580, what: 'UptimeRobot notifies us our websocket worker is returning with 502s. Connecting to our instance, it appears that a nodejs module is missing and fails to load, preventing our processes from starting' },
	    { date: 1481310720, what: 'new version of peerio-server freezed, integration tests fixed to force loading that library we were missing' },
	    { date: 1481311380, what: 'integration tests confirmed our new version is consistent, freezing/shipping a new version of peerio-backend' },
	    { date: 1481312820, what: 'StatusCake is last to confirms service is back up' },
	    { date: 1481312880, what: 'CodeDeploy acknowledges finishing deploying our fix to EC2.' } ]
    }, {
	what: 'replication outage',
	where: 'productiondr',
	why: 'DR ipsec gateway stopped responding',
	timeline: [
	    { date: 1480631880, what: 'icinga notifies us link from production to DR is down' },
	    { date: 1480631940, what: 'identified our problem to be related with our DR ipsec instance being unresponsive' },
	    { date: 1480632300, what: 'stopping the faulty instance from AWS console' },
	    { date: 1480632360, what: 'starting our IPSEC gateway back' },
	    { date: 1480632540, what: 'IPSEC are back up, Riak replication properly running' },
	    { date: 1480632840, what: 'IPSEC connectivity lost. Instances are fine, restarting tunnels' },
	    { date: 1480632900, what: 'IPSEC are back up, Riak replication properly running, keeping an eye on it.' } ]
    }, {
	what: 'redis outage',
	where: 'ice-bear',
	why: 'Redis database full',
	timeline: [
	    { date: 1480434540, what: 'StatusCake notifies us our websocket service is unresponsive' },
	    { date: 1480434900, what: 'identified our problem to be related with memory usage on ElastiCache, booting a new redis cluster' },
	    { date: 1480436700, what: 'new cache cluster available, scheduling a new deployment reloading our runtime variables' },
	    { date: 1480437960, what: 'processes are reloaded using our new cache cluster' },
	    { date: 1480438680, what: 'former cache cluster and corresponding were purged from AWS and monitoring.' } ]
    }, {
	what: 'redis & riak outage',
	where: 'ice-bear',
	why: 'Redis database full, Riak instances unresponsive',
	timeline: [
	    { date: 1480335840, what: 'icinga2 notifies us that a couple Riak instances are unresponsive, and our redis memory usage is unusually high' },
	    { date: 1480340820, what: 'UptimeRobot notifies us some staging service became unavailable' },
	    { date: 1480342920, what: 'waking up, I boot a new ElastiCache cluster and reboot the faulty Riak nodes' },
	    { date: 1480350720, what: 'processes are reloaded using our new cache cluster, Riak is back' },
	    { date: 1480356960, what: 'purging former cache cluster and corresponding backups from AWS, purged from monitoring.' } ]
    }, {
	what: 'riak outage',
	where: 'ice-bear',
	why: 'Riak crashed on some Riak node',
	timeline: [
	    { date: 1479201900, what: 'icinga2 notifies us that some Riak watchdog failed restarting Riak on staging. Since we shrunk our staging cluster down to 3 nodes, a single node failure is now critical for most our NodeJS services' },
	    { date: 1479202080, what: 'UptimeRobot notifies us some staging service became unavailable' },
	    { date: 1479212460, what: 'having connected to the faulty node, fixing our watchdog script once and for all' },
	    { date: 1479212700, what: 'crontab runs our watchdog script, and successfully restarts Riak' },
	    { date: 1479212880, what: 'UptimeRobot confirms service is back up.' } ]
    }, {
	what: 'riak outage',
	where: 'ice-bear',
	why: 'Riak crashed on some Riak node',
	timeline: [
	    { date: 1479133800, what: 'icinga2 notifies us that some Riak watchdog failed restarting Riak on staging. Since we shrunk our staging cluster down to 3 nodes, a single node failure is now critical for most our NodeJS services' },
	    { date: 1479133840, what: 'having connected to the faulty node, Riak was indeed stopped. No problem restarting it' },
	    { date: 1479133860, what: 'UptimeRobot notifies us some staging service became unavailable' },
	    { date: 1479133920, what: 'UptimeRobot confirms service is back up.' } ]
    }, {
	what: 'riak outage',
	where: 'ice-bear',
	why: 'unresponsive processes, unresponsive instance',
	timeline: [
	    { date: 1478983680, what: 'anri notify us that Staging stopped working. Shortly after, icinga confirms us that two out of three Riak processes stopped responding. Corresponding instances are still reachable, whereas the third one is responding to PING but refusing SSH connections' },
	    { date: 1478984100, what: 'shutting down our third instance' },
	    { date: 1478984280, what: 'instance shut down, starting it back' },
	    { date: 1478984340, what: 'instance backup, meanwhile Riak was restarted on the two first instances. Cluster is back healthy' },
	    { date: 1478984460, what: 'icinga confirms Riak balancer is forwarding traffic back' },
	    { date: 1478985180, what: 'StatusCake confirms our frontends are showing healthy back.' } ]
    }, {
	what: 'riak partial outage',
	where: 'ice-bear',
	why: 'unscheduled termination of some Riak node',
	timeline: [
	    { date: 1478945280, what: 'icinga2 notifies us that some Riak node is down on staging. No implication for end users, as Riak can sustain a single node failure' },
	    { date: 1478945400, what: 'replacement instance is booted, ansible notifies us it is configuring our new instance' },
	    { date: 1478946300, what: 'initial deployment failed due to plan change error, after a 60 second sleep ansible tries again configuring our new instance' },
	    { date: 1478946960, what: 'second deployment failed due to plan change error, after a 60 second sleep ansible tries again configuring our new instance' },
	    { date: 1478947860, what: 'ansible notifies us our instance is fully configured' },
	    { date: 1478949600, what: 'icinga2 notifies us our Riak cluster plan has pending changes we would either need to clear or apply' },
	    { date: 1478959680, what: 'waking up, I notice some un-applied plan changes, dataset looks healthy although ring is not ready' },
	    { date: 1478960520, what: 'clearing plan changes, marking faulty node as down, force-removing it then applying our changes' },
	    { date: 1478960880, what: 'monitoring confirms Riak is healthy back.' } ]
    }, {
	what: 'riak outage',
	where: 'ice-bear',
	why: 'Shortly after importing Riak database dump, lost connectivity to three out of four ring members',
	timeline: [
	    { date: 1478543640, what: 'icinga starts reporting checks as timing out, then eventually 3 out of 4 Riak nodes as down' },
	    { date: 1478543760, what: 'instances show as healthy from aws console. Detaching faulty instances from their ASG. Forcing them to shut down' },
	    { date: 1478543820, what: 'StatusCake reports our Riak-based staging services as down' },
	    { date: 1478544180, what: 'instances stopped, starting them back' },
	    { date: 1478544300, what: 'StatusCake starts reporting our faulty services as back up' },
	    { date: 1478544540, what: 'monitoring back to green everywhere.' } ]
    }, {
	what: 'replication outage',
	where: 'productiondr',
	why: 'DR ipsec gateway stopped responding',
	timeline: [
	    { date: 1476738600, what: 'icinga reports all our checks as timing out, then eventually all instances as down, although there is only one notification per check: the problem lies on our IPSEC tunnel being down' },
	    { date: 1476738660, what: 'instance shows as unhealthy from aws console. Forcing it to shut down' },
	    { date: 1476739140, what: 'instance stopped, starting it back' },
	    { date: 1476739500, what: 'IPSEC tunnels back up' },
	    { date: 1476739740, what: 'done confirming that our replicated services recovered from our connection loss.' } ]
    }, {
	what: 'blob outage',
	where: 'productiondr',
	why: 'DR blob loadbalancer instance stopped responding',
	timeline: [
	    { date: 1475601900, what: 'icinga reports several checks timing out against our blob loadbalancer instance' },
	    { date: 1475601960, what: 'instance shows as stopping from the aws console, waiting for its replacement' },
	    { date: 1475602260, what: 'new instance booted, ansible starting to configure' },
	    { date: 1475603640, what: 'ansible done configuring haproxy' },
	    { date: 1475603880, what: 'Route53 health checks shows back as healthy.' } ]
    }, {
	what: 'partial site outage',
	where: 'productiondr',
	why: 'DR site instance stopped responding',
	timeline: [
	    { date: 1475494620, what: 'icinga reports several checks timing out against our site instance' },
	    { date: 1475494660, what: 'stopping site instance from the aws console' },
	    { date: 1475496300, what: 'site instance stopped, starting it back' },
	    { date: 1475496360, what: 'instance is back up' },
	    { date: 1475496660, what: 'Route53 health checks shows back as healthy on DR.' } ]
    }, {
	what: 'partial api outage',
	where: 'aws_prod',
	why: 'network losses on us-east-1',
	timeline: [
	    { date: 1474890300, what: 'icinga reports several production services as recovered or flapping, our status page confirms our service is down' },
	    { date: 1474890780, what: 'noticing these alerts, I start looking at our logs. Our workers are losing connectivity to Azure, our Balancers to our Workers, .... pretty much all our services are suffering from network losses' },
	    { date: 1474891620, what: 'Route53 records changed forcing all traffic to DR, as our current health checks are flapping from one env to the other' },
	    { date: 1474892220, what: 'our last flapping services are now showing as recovered. It looks like we no longer suffer from network losses' },
	    { date: 1474962300, what: 'Route53 records restored, pending re-viewing our health checks.' } ]
    }, {
	what: 'riak partial outage',
	where: 'aws_prod',
	why: 'unscheduled termination of a riak node, with no real incidence on production',
	timeline: [
	    { date: 1474136700, what: 'nagios reports a couple socket timeouts reaching one of our riak node, before reporting us that instance was down' },
	    { date: 1474136880, what: 'new instance is listed as starting on aws console' },
	    { date: 1474137060, what: 'ansible notifies us it started configuring our new instance' },
	    { date: 1474138440, what: 'faulty node removed from our riak cluster, new node added, plan change committed' },
	    { date: 1474138560, what: 'riak balancers configuration updated, forwarding traffic to our new node.' } ]
    }, {
	what: 'DR partial outage',
	where: 'productiondr',
	why: 'unscheduled termination of our background worker, in charge of sending mail and sms notifications',
	timeline: [
	    { date: 1473100920, what: 'icinga2 notifies us our background worker is down on DR. No implication for end users, as DR is not active' },
	    { date: 1473101880, what: 'replacement instance is booted, ansible notifies us it is configuring our new instance' },
	    { date: 1473102240, what: 'CodeDeploy notifies us peerio-server deployment is done' },
	    { date: 1473102540, what: 'ansible notifies us our instance is fully configured.' } ]
    }, {
	what: 'DR general outage',
	where: 'productiondr',
	why: 'unscheduled termination of the loadbalancer in front of our DR riak cluster',
	timeline: [
	    { date: 1469598600, what: 'icinga2 notifies us several probes started flapping' },
	    { date: 1469599020, what: 'StatusCake notifies us our ghosts gateway is down on DR' },
	    { date: 1469599080, what: 'icinga2 notifies us our riak balancer on DR is down' },
	    { date: 1469599500, what: 'replacement instance is booted, ansible notifies us it is configuring our new instance' },
	    { date: 1469599560, what: 'StatusCake notifies us our api gateway is down on DR' },
	    { date: 1469599620, what: 'StatusCake notifies us our files gateway is down on DR' },
	    { date: 1469599920, what: 'ansible notifies us our new instance is up and running, although our workers are still trying and failing to connect to their former backend' },
	    { date: 1469605920, what: 'awaken by notifications, I start an ELB in front of our riak cluster' },
	    { date: 1469606160, what: 'new ELB up and running, updating our worker runtime variables, then scheduling a new deployment of peerio-server' },
	    { date: 1469607060, what: 'StatusCake notifies us our api gateway is back up' },
	    { date: 1469607120, what: 'StatusCake notifies us our files gateway is back up' },
	    { date: 1469607180, what: 'CodeDeploy notifies us peerio-server deployment is done, scheduling a new deployment of peerio-inferno' },
	    { date: 1469607960, what: 'CodeDeploy notifies us peerio-inferno deployment is done' },
	    { date: 1469608200, what: 'StatusCake notifies us our ghosts gateway is back up' },
	    { date: 1469610000, what: 'shut down our haproxy ASG in front of riak: dynamic IPs without some DNS to be used from our workers is doomed to fail.' } ]
    }, {
	what: 'accounts management portal partial outage',
	where: 'aws_prod',
	why: 'unscheduled termination of a loadbalancer serving accounts.peerio.com',
	timeline: [
	    { date: 1469173020, what: 'icinga2 notifies us several probes started flapping' },
	    { date: 1469173080, what: 'icinga2 sends us an other bunch of recovery notifications' },
	    { date: 1469174880, what: 'icinga2 sends us a third bunch of notifications regarding this loadbalancer' },
	    { date: 1469175000, what: 'icinga2 reports this loadbalancer finally stopped responding' },
	    { date: 1469175240, what: 'system is booted, ansible notifies us it is configuring our new instance' },
	    { date: 1469175840, what: 'ansible notifies us our new system is configured' },
	    { date: 1469182380, what: 'waking up, I confirm ansible properly registered a new health check and matching DNS record to route53, haproxy is properly relaying' },
	    { date: 1469182740, what: 'dropping the DNS record and healthcheck corresponding to our former balancer. StatusCake & UptimeRobot report 100% uptime, as our production is based on pairs of instances, and Route53 did its job.' } ]
    }, {
	what: 'ghosts outage',
	where: 'staging',
	why: 'unscheduled termination of our inferno instance',
	timeline: [
	    { date: 1468961160, what: 'icinga2 reports our ghost worker stopped responding' },
	    { date: 1468961460, what: 'system is booted, ansible notifies us it is configuring our new instance' },
	    { date: 1468961820, what: 'codedeploy starts deploying peerio-inferno to our new instance' },
	    { date: 1468961940, what: 'codedeploy is done installing peerio-inferno' },
	    { date: 1468961960, what: 'haproxy detected its new backend, ghosts is back online' },
	    { date: 1468962120, what: 'ansible notifies us our new system is configured.' } ]
    }, {
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
	why: 'packet losses to one of our loadbalancer serving blob.peerio.com (files)',
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
