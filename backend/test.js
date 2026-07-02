const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dns.resolveSrv(
  "_mongodb._tcp.zerodhaclonecluster.txbiu.mongodb.net",
  (err, records) => {
    console.log(err);
    console.log(records);
  },
);
