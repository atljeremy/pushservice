import org.specs2.mutable._

import play.api.test._
import play.api.test.Helpers._

class RoutesSpec extends Specification {

  "Route to / should" should {
    "respond to the index Action" in {
      val Some(result) = routeAndCall(FakeRequest(GET, "/"))

      status(result) must equalTo(OK)
      contentType(result) must beSome("text/html")
      charset(result) must beSome("utf-8")
    }
  }
}