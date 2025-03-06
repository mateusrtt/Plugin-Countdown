# Countdown Timer

Este projeto de plugin oferece uma classe JavaScript simples para calcular a contagem regressiva até uma data futura específica. Com ela, você pode facilmente obter o tempo restante em dias, horas, minutos e segundos até o evento desejado.

## Como funciona?

A classe `Countdown` aceita uma data no formato string (por exemplo, `'24 December 2025 23:59:59 GMT-0300'`) e calcula a diferença entre a data atual e a data futura fornecida. Ela fornece métodos para obter o tempo restante em diferentes unidades (dias, horas, minutos e segundos).

### Métodos

- **`days`**: Retorna o número de dias restantes até a data futura.
- **`hours`**: Retorna o número total de horas restantes até a data futura (considerando o total de horas até o momento).
- **`minutes`**: Retorna o número total de minutos restantes até a data futura (considerando o total de minutos até o momento).
- **`seconds`**: Retorna o número total de segundos restantes até a data futura (considerando o total de segundos até o momento).
- **`total`**: Retorna um objeto com o tempo restante dividido em `days`, `hours`, `minutes` e `seconds`.

## Exemplo de uso

```javascript
import Countdown from "./countdown.js";

// Defina a data futura para o Natal e Ano Novo
const TempoParaNatal = new Countdown('24 December 2025 23:59:59 GMT-0300');
const TempoParaAnoNovo = new Countdown('31 December 2025 23:59:59 GMT-0300');

// Exibe o tempo restante no console
console.log(TempoParaNatal.total); // Exemplo: { days: 100, hours: 12, minutes: 30, seconds: 45 }
console.log(TempoParaAnoNovo.total); // Exemplo: { days: 200, hours: 5, minutes: 15, seconds: 30 }

// Para exibir continuamente a contagem regressiva, descomente o código abaixo
// setInterval(() => {
//     console.log(TempoParaAnoNovo.total);
// }, 1000);
