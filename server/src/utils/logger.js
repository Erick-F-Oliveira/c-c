import chalk from "chalk";

const getTimestamp = () => {
  const now = new Date();
  return now.toLocaleTimeString("pt-BR", { hour12: false });
};

const logger = {

  superInfo: (...args) => {
    console.log(chalk.bgBlue(`[${getTimestamp()}] [INFO]`),chalk.bgBlue( ...args));
  },
    info: (...args) => {
        console.log(chalk.blue(`[${getTimestamp()}] [INFO]`),chalk.blue( ...args));
    },

  superSuccess: (...args) => {
    console.log(chalk.bgGreenBright(`[${getTimestamp()}] [SUCCESS]`),chalk.bgGreenBright( ...args,"✔ "));
  },
    success: (...args) => {
        console.log(chalk.greenBright(`[${getTimestamp()}] [SUCCESS]`),chalk.greenBright( ...args,"✔"));
    },

  warn: (...args) => {
    console.warn(chalk.bgYellowBright(`[${getTimestamp()}] [WARN]`), ...args);
  },
  error: (...args) => {

    console.error(chalk.bgRedBright(`[${getTimestamp()}] [ERROR]`),chalk.redBright( ...args));

     const lastArg = args[args.length - 1];
    if (lastArg instanceof Error) {
      console.error(chalk.red(lastArg.stack));
    }
  },


  table: (data, columns) => {
    console.log(chalk.cyan(`[${getTimestamp()}] [TABLE]`));
    console.table(data, columns);
  },
};

export default logger;