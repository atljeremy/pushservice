import org.specs2.mutable._

import play.api.test._
import play.api.test.Helpers._

class ApplicationSpec extends Specification {

  "The Application Controller Must Return OK Result With text/html ContentType and utf-8 Charset" should {
    "respond to the index Action" in {
      val result = controllers.Application.index()(FakeRequest())

      status(result) must equalTo(OK)
      contentType(result) must beSome("text/html")
      charset(result) must beSome("utf-8")
    }
  }
}