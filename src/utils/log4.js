/**
 * @default 日志存储
 */

const log4js = require("log4js");

const levels = {
	trace: log4js.levels.TRACE,
	debug: log4js.levels.DEBUG,
	info: log4js.levels.INFO,
	warn: log4js.levels.WARN,
	error: log4js.levels.ERROR,
	fatal: log4js.levels.FATAL,
};

log4js.configure({
	appenders: {
		console: { type: "console" },
		info: {
			type: "file",
			filename: "logs/app",
		},
		error: {
			type: "dateFile",
			filename: "logs/error",
			pattern: "yyyy-MM-dd-hh.log", // 设置文件名称为 filename + pattern
			encoding: "utf-8",
			alwaysIncludePattern: true,
		},
		warn: {
			type: "file",
			filename: "logs/warn",
			pattern: "yyyy-MM-dd-hh.log", // 设置文件名称为 filename + pattern
			encoding: "utf-8",
			alwaysIncludePattern: true,
		},
	},
	categories: {
		default: { appenders: ["console"], level: "info" },
		info: {
			appenders: ["info", "console"],
			level: "info",
		},
		error: {
			appenders: ["error", "console"],
			level: "error",
		},
		warn: {
			appenders: ["warn", "console"],
			level: "warn",
		},
	},
});

/**
 * 日志输出，level为debug
 * @param {string} content
 */
exports.debug = (content) => {
	let logger = log4js.getLogger();
	logger.level = levels.debug;
	logger.debug(content);
};

/**
 * 日志输出，level为info
 * @param {string} content
 */
exports.info = (content) => {
	let logger = log4js.getLogger("info");
	logger.level = levels.info;
	logger.info(content);
};

/**
 * 日志输出，level为error
 * @param {string} content
 */
exports.error = (content) => {
	let logger = log4js.getLogger("error");
	logger.level = levels.error;
	logger.error(content);
};

/**
 * 日志输出，level为warn
 * @param {string} content
 */

exports.warn = (content) => {
	let logger = log4js.getLogger("warn");
	logger.level = levels.warn;
	logger.warn(content);
};
