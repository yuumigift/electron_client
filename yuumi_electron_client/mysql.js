const mysql = require("mysql");
connection.connect(async (err) => {
  if (err) {
    console.error("数据库连接失败：", err);
    return;
  }
  console.log("success");

  const dict=await connection.query(`select * from dict`, (err, res) => {
    console.log(res);
  });


  const server = http.createServer((req, res) => {
    // 设置响应头
    res.setHeader('Content-Type', 'application/json');
    
    // 处理请求
    if (req.url === '/api/data') {
      // 返回数据
      const data = { message: 'Hello, World!' };
      res.end(JSON.stringify(data));
    } else {
      // 处理其他请求
      res.statusCode = 404;
      res.end();
    }
  });
});

export const query = () => {
  return new Promise((resolve, reject) => {
    connection.query(`select * from dict`, (err, res) => {
      if (err) {
        reject();
      }
      resolve(res);
    });
  });
};
