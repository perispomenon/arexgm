import Random from 'random-js'
const engine = Random.engines.mt19937().autoSeed() // uses current time and whatnot, or so is stated in doc

export default {
  methods: {
    getNextInt () {
      return Random.integer(0, 100)(engine)
    },
    getNextOperation () {
      return Random.string('+-/*')(engine, 1)
    }
  }
}
