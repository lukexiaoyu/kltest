import {writeFile} from 'node:fs/promises'

try{
    await writeFile('./archivo.txt', 'Esto es un archivo de prueba')
}catch(e){
    console.log(e)
}