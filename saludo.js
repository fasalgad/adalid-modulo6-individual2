import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv))
  .command(// EL nombre del comando
    "saludo",
    // Descripción del comando a definir
    "Comando para saludar",
    {
      nombre: {
        describe: 'Tu nombre',
        demand: true,
        alias: "n"
      }
    },
    (args) => {
      // Usamos un condicional
      if (typeof args.nombre === 'string' ) {
        console.log("Saludando y deseando un excelente día, " + args.nombre)
      } else {
        console.log("Error nombre")
      }
    }
  )
  .help().argv