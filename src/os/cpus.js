import os from "os";

export const cpus = () => {
    const cpus = os.cpus();
    const amountOfCpus = cpus.length;

    console.log('Overall amount of CPUS - ' + amountOfCpus);

    let i = 1;
    console.log('Cpu\'\s info:');
    for (const elem of cpus) {
        console.log(`Cpu ${i}: `);
        console.log('Model:', elem.model);
        console.log('Clock Rate:', (elem.speed / 1000).toFixed(2) + ' GHz');
        i++;
    }
};