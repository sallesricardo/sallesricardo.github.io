---
title: "Engenharia Reversa Automotiva & Barramento CAN"
description: "Desenvolvimento de interface com Arduino para engenharia reversa e simulação de telemetria em painel de instrumentos Fiat Siena fora do veículo."
category: "low-level"
technologies: ["C/C++", "Arduino", "CAN bus", "Eletrônica"]
order: 1
---

Para este projeto, mapeei os IDs de comunicação (como `0x0DD` e `0x1C3`) para decodificar os sinais de RPM, temperatura e velocidade enviados pelo módulo de injeção original.

A interface física foi modificada para operar de forma autônoma na bancada, permitindo injetar pacotes customizados diretamente no barramento para testar a resposta dos ponteiros e LEDs do cluster em tempo real.
