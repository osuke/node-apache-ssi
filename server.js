var connect = require('connect'),
    serveStatic = require('serve-static'),
	connectSSI = require('connect-ssi'),
	baseDir = __dirname + '/htdocs';

var app = connect();

app.use(connectSSI({
  baseDir: baseDir,
  ext: '.html'
}));
app.use(serveStatic(baseDir));
app.listen(3000);
