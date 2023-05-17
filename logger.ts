import log4js from 'log4js'
import path from 'path'

const loggerLayout = {
  type: "pattern",
  pattern: "[%d{yyyy-MM-dd hh:mm:ss}] [%p]: %m%n",
}

log4js.configure({
  appenders: {
    sql: {
      type: 'file',
      filename: path.resolve(__dirname, 'logs/sql/sql.log'),
      maxLogSize: 1024 * 1024,
      keepFileExt: true,
      layout: loggerLayout,
    },
    default: {
      type: "file",
      filename: path.resolve(__dirname, 'logs/default/logging.log'),
      maxLogSize: 1024 * 1024 * 10,
      keepFileExt: true,
      layout: loggerLayout,
    }
  },
  categories: {
    sql: { appenders: ['sql'], level: "info" },
    default: { appenders: ["default"], level: "debug" },
  },
})

process.on("exit", () => {
  log4js.shutdown();
});

export const sqlLogger = log4js.getLogger("sql");
export const defaultLogger = log4js.getLogger();
