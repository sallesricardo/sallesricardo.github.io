---
title: "Diagnóstico e Recuperação de Firmware"
description: "Extração, análise e gravação de BIOS corrompidas diretamente no chip EEPROM utilizando BeagleBone Black e UEFITool."
category: "low-level"
technologies: ["BeagleBone Black", "PRU", "UEFITool", "Firmware", "SPI"]
order: 2
---

Análise avançada e recuperação de hardware após falhas críticas de energia. Utilizando as PRUs da BeagleBone Black como um programador de baixo nível robusto, realizei o dump de imagens de BIOS diretamente do chip soldado na placa-mãe.

O arquivo binário foi inspecionado estruturalmente via UEFITool para isolar regiões corrompidas, permitindo a recomposição e o flash bem-sucedido do firmware original.
