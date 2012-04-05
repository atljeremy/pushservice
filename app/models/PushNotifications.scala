package models
import org.codehaus.jackson.annotate.JsonProperty
import reflect.BeanProperty
import javax.persistence.Id
import play.api.Play.current
//import play.modules.mongodb.jackson.MongoDB
import scala.collection.JavaConversions._
import java.util.Date

class PushNotifications(
//               @ObjectId @Id val id: String,
//               @BeanProperty @JsonProperty("date") val date: Date,
//               @BeanProperty @JsonProperty("message") val message: String,
//               @BeanProperty @JsonProperty("author") val author: String
) {
//
//  @ObjectId
//  @Id
//  def getId = id;

}

object PushNotifications {
//  private lazy val db = MongoDB.collection("blogposts", classOf[BlogPost], classOf[String])
//
//  def save(blogPost: BlogPost) { db.save(blogPost) }
//  def findById(id: String) = Option(db.findOneById(id))
//  def findByAuthor(author: String) = db.find().is("author", author).asScala
}