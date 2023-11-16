#!/usr/bin/env python

def mostra_opcoes():
    print(" ######## CONVERSOR DE TEMPERATURA ########")
    print(" 1. Converter de Celsius para Fahrenheit.")
    print(" 0. Encerrar o programa e sair.")


def celsius_para_fahrenheit():
    temperatura = float(input(" - Temperatura: "))
    temp_convertida = temperatura * 1.8 + 32
    print(" {:.2f} °C é igual a {:.2f} °F".format(temperatura, temp_convertida))


escolha = -1
while escolha != 0:
    mostra_opcoes()
    escolha = input(" - Opção: ")
    if escolha == '1':
        celsius_para_fahrenheit()
    elif escolha == '0':
        break

