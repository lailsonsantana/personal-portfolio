export const dataset = [
  {
    topic: 'React',
    focus: 14,
  },
  {
    topic: 'Spring',
    focus: 9,
  },
  {
    topic: 'Arquitetura',
    focus: 7,
  },
  {
    topic: 'PostgreSQL',
    focus: 5,
  },
  {
    topic: 'Testes',
    focus: 4,
  },
];

export function valueFormatter(value: number | null) {
  return value ? `${value} registros` : '';
}