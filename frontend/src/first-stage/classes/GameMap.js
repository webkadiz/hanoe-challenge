import $ from "jquery"

export default class GameMap {
  constructor() {
    this.glows = $(".glow")
    this.rods = $(".rod")
    this.floor = $(".floor")
    this.field = $(".field")
    this.score = $(".score")
    this.bestScore = $(".best-score")
    this.overlay = $(".overlay")
  }
}
