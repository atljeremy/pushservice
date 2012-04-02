import akka.actor.{Actor, Props}
import play.api._
import play.api.libs.concurrent.Akka
import akka.util.duration._
import play.api.Play.current

object Global extends GlobalSettings {

  val Tick = "tick"

  override def onStart(app: Application) {
    Logger.info("Application has started")
    //val tickActor = Akka.system.actorOf(Props[MyActor], name = "myactor")

    val tickActor = Akka.system.actorOf(Props(new Actor {
      def receive = {
        case Tick ⇒ println("FIRING TICK ACTOR!!!")
      }
    }))

    //This will schedule to send the Tick-message
    //to the tickActor after 0s repeating every 1m
    Akka.system.scheduler.schedule(0 seconds, 1 minutes, tickActor, Tick)
  }

  override def onStop(app: Application) {
    Logger.info("Application shutdown...")
  }

}
