export const createTable = (data) => {
    console.log('');
    const headers = ['(index)', 'Name', 'Type'];
    const maxLengths = headers.map(header => header.length);

    data.forEach(item => {
        maxLengths[0] = Math.max(maxLengths[0], item.index.toString().length);
        maxLengths[1] = Math.max(maxLengths[1], item.name.length);
        maxLengths[2] = Math.max(maxLengths[2], item.type.toString().length);
    });

    const maxTypeLength = Math.max(maxLengths[2], 15);

    const headerRow = headers.map((header, index) => {
        if (index === 2) {
            return header.padEnd(maxTypeLength);
        }
        return header.padEnd(maxLengths[index]);
    });
    console.log('| ' + headerRow.join(' | ') + ' |');

    const separatorRow = maxLengths.map((length, index) => {
        if (index === 2) {
            return '-'.repeat(maxTypeLength);
        }
        return '-'.repeat(length);
    });
    console.log('| ' + separatorRow.join(' | ') + ' |');

    data.forEach(item => {
        const rowData = [
            item.index.toString().padEnd(maxLengths[0]),
            item.name.padEnd(maxLengths[1]),
            item.type === true ? 'file'.padEnd(maxTypeLength) : 'directory'.padEnd(maxTypeLength)
        ];
        console.log('| ' + rowData.join(' | ') + ' |');
    });
}