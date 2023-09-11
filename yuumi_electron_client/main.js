const { app, BrowserWindow } = require("electron");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost", // 数据库主机名
  user: "root", // 数据库用户名
  password: "9652251117", // 数据库密码
  database: "mengtu", // 数据库名称
});

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.electron_tools = {};
  win.loadFile("dist_vue/index.html");
  connection.connect((err) => {
    if (err) {
      console.error("数据库连接失败：", err);
      return;
    }
    console.log("success");

    connection.query(`select * from dict`, (err, dict) => {
      console.log(dict);
    });
  });
};

app.whenReady().then(() => {
  createWindow();
});
