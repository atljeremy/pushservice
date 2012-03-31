import org.specs2.mutable._

import play.api.test._
import play.api.test.Helpers._

class IndexSpec extends Specification {

  "Index Should" should {
    "render index template" in {
      val html = views.html.index()

      contentType(html) must equalTo("text/html")
    }
  }
}