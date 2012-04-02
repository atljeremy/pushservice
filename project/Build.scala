import sbt._
import Keys._
import PlayProject._

object ApplicationBuild extends Build {

    val appName         = "PushService"
    val appVersion      = "1.0"

    val appDependencies = Seq(
      "net.vz.mongodb.jackson" %% "play-mongo-jackson-mapper" % "1.0.0-rc.2"
    )

    val main = PlayProject(appName, appVersion, appDependencies, mainLang = SCALA).settings(

    )

}
