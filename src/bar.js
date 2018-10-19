export default function bar() {
    console.log('Hello Cristi');
}

export function defaultParameters(height, color = '#FF0000') {
    console.log('Default parameters', height, color);
}