module.exports = {
    // Type check Typescript files
    '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

    // Lint then format Typescript and Javascript files
    '**/*.(ts|tsx|js)': (fileNames) => [
        `yarn eslint --fix ${fileNames.join(' ')}`,
        `yarn prettier --write ${fileNames.join(' ')}`,
    ],

    // Format MarkDown and JSON
    '**/*.(md|json)': (fileNames) =>
        `yarn prettier --write ${fileNames.join(' ')}`,
}
