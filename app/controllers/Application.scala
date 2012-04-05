package controllers

import play.api._
import data.Form
import data.Forms._
import mvc.{Action, Controller}

object Application extends Controller {

  val pushForm=Form(
    tuple(
      "channel" -> nonEmptyText,
      "message" -> nonEmptyText,
      "OS" -> text,
      "chan" -> text
    )
  )

  def index = Action {
    Ok(views.html.index())
  }

  def push = Action {
    Ok(views.html.push(pushForm))
  }

}