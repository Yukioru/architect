export default (properties, timing = '0.2s', effect = 'ease-out') => {
  let transitions = '';
  properties.split(' ').forEach((prop, index) => {
    let composing = `${prop} ${timing} ${effect}`;
    if (index < properties.split(' ').length - 1) composing += ', ';
    transitions += composing;
  })
  const changes = properties.split(' ').join(', ');
  return `
    transition: ${transitions};
    will-change: ${changes};
  `;
}