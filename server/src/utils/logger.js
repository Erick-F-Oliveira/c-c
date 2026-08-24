import chalk from "chalk";

const getTimestamp = () => {
  const now = new Date();
  return now.toLocaleTimeString("pt-BR", { hour12: false });
};

const logger = {
  // ...args permite passar quantos argumentos quiser (ex: logger.info("User:", userObj))
  info: (...args) => {
    console.log(chalk.bgBlue(`[${getTimestamp()}] [INFO]`),chalk.blue( ...args));
  },

  success: (...args) => {
    console.log(chalk.bgGreenBright(`[${getTimestamp()}] [SUCCESS]`),chalk.greenBright( ...args,"✔"));
  },

  warn: (...args) => {
    console.warn(chalk.bgYellowBright(`[${getTimestamp()}] [WARN]`), ...args);
  },
  error: (...args) => {

    console.error(chalk.bgRedBright(`[${getTimestamp()}] [ERROR]`),chalk.redBright( ...args));

    // Se o último argumento for um objeto Error, imprime o stack trace completo
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