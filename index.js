// Write your solution here!

const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name)
}

function appendDriver(name) {
  const copyOfDrivers = drivers.slice()
    copyOfDrivers.push(name)
    return copyOfDrivers
}

function prependDriver(name) {
  const copyOfDrivers = drivers.slice()
  copyOfDrivers.unshift(name)
  return copyOfDrivers
}

function removeLastDriver() {
  const copyOfDrivers = drivers.slice()
  copyOfDrivers.pop()
  return copyOfDrivers
}

function removeFirstDriver() {
  const copyOfDrivers = drivers.slice()
  copyOfDrivers.shift()
  return copyOfDrivers
}