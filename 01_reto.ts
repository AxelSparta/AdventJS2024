/* 
INSTRUCCION:
Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente. */

function prepareGifts(gifts: number[]): number[] {
  // Code here
  // Array.from es un método de clase que permite crear nuevos arrays desde tipos de datos iterables...
  // Set es una estructura de datos en la cual no permite datos repetidos...
  const withoutDuplicates = Array.from(new Set(gifts))
  // sort es un método de instancia de un array que permite ordenar sus elementos como queramos, en este caso de forma ascendente...
  withoutDuplicates.sort((a, b) => (a - b))
  return withoutDuplicates
}