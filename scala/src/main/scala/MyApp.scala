import com.test.model.User
import com.test.model.AdminUser
// import com.test.model.{User, AdminUser}
// import com.test.model._

object MyApp {
    //

    // 変数
    // val : immutable
    // var : mutable
    def main(args: Array[String]): Unit = {
        // val msg: String = "Hello"

        // さまざまなデータ型
        // 整数 Byte Short Int Long
        var i = 5
        val l = 4444444L

        // 浮動小数点数
        val d = 34343.5
        val f = 4343.43F
        // 文字
        val a = 'a'

        // 文字例
        val msg = "Hello"

        // 特殊記号

        // 論理演算
        val flag = true // false
        println(msg);

        // 演算 (+ - * / %)
        val x = 10
        println(x/3) // 3
        println(x/3.0) // 3.33333...
        println(x % 3) // 1

        // and or not
        // && || !
        var flag = true
        println(!flag)

        //
        var name = "itachi"
        var score = 40
        val height = 134.5

        println(s"name: $name, score: $score, height: $height")
        println(s"name: $name, score: ${score + 10}, height: $height")

        println(s"name: $name%s, score: $score%d, height: $height%f")
        println(s"name: $name%10s, score: $score%10d, height: $height%10f")

        // ifで条件分岐
        val score = 54
        if (score > 60) println("Great!")

        val result =
            if (score > 80) "Great!"
            else if (score > 60) "Good!"
            else "Soso ..."
        println(result)

        // match
        val signal = "red"
        val result = signal match {
            case "red" => "stop"
            case "blue" | "green" => "go"
            case "yellow" => "caution"
            // case _=> "Wrong signal"
            case other => s"Wrong signal ${other}"
        }
        println(result)

        // while
        // 0 - 9
        var i = 0
        while (i < 10) {
            println(i)
            i += 1
        }

        do {
            println(i)
            i += 1
        } while (i < 10)

        // for (ジェネレータ) 処理
        // for (変装　<- データの集会) 処理
        // 0 to 3 ¥, 0 until 4
        for(i <- 0 to 3; j<- 0 to 3) println(s"$i, $j")
        for(i <- 0 to 3; j<- 0 to 3 if i != j) println(s"$i, $j")
        val result = for(i <- 0 to 3; j<- 0 to 3 if i != j) yield (s"$i, $j")
        for (el <- result) println(el)

        // method
        sayHi

        //
        sayHello("tom")
        sayHello("tom", 34)
        sayHello(name = "tom", age = 34)

        // class
        val user = new User("tom") // インスタンス
        println(user.name)
        user.sayHi()

        // クラスを継承
        val bod = new AdminUser("bod", 23)
        println(bod.name)
        bod.sayHello()
        bod.sayHi()

        // packageでクラスを管理
        // User , AdminUser
        val tom = new com.test.model.User("tom");
        val bod = new com.test.model.AdminUser("bod", 32);

        val tom = new User("tom");
        val bod = new AdminUser("bod", 32);

        // final
        val user = new User
        val adminUser = new AdminUser
        println(adminUser.name)
    }

    def sayHi: String = {
        // println("Hi!")
        // return "Hi!"
        "hi!"
    }

    def sayHello(name: String = "itachi", age: Int = 23): Unit = {
        println(s"Hi! $name ($age)")
    }
}

// Class
// user: User
// i: Int
// 変数 フィールド
// method

class User(_name: String) {
    val name = _name
    // def sayHi() = println("Hi!" + this.name)
    def sayHi() = println("Hi!" + name)
}

// User -> AdminUser
class AdminUser(name: String, val age: Int) extends User(name) {
    def sayHello() = println("Hello!" + name + "(" + age + ")")
    override def sayHi() = println("Admin Hi!" + name)
}

// アクセス修飾子
// public, private, protected
class User(_name: String) {
    // val name = _name
    // protected val name = "Itachi"
    private val name = "Itachi"
    // def sayHi() = println("Hi!" + this.name)
    def sayHi() = println("Hi!" + name)
}

// User -> AdminUser
class AdminUser(name: String, val age: Int) extends User(name) {
    def sayHello() = println("Hello!" + name + "(" + age + ")")
    override def sayHi() = println("Admin Hi!" + name)
}

// final
// - class 継承できない
// - members overrideできない
class User(_name: String) {
    final val name = "Itachi"
    def sayHi() = println("Hi!" + name)
}

class AdminUser(name: String, val age: Int) extends User(name) {
    override val name = "admin user"
    override def sayHi() = println("Admin Hi!" + name)
}

// object
object User {
    def getInfo() = println("User object!")
    def apply(name: String) = new User(name)
}

class User(_name: String) {
    def sayHi() = println("Hi!" + name)
}

object MyApp {
    def main(args: Array[String]: Unit = {
        User.getInfo()
        val user = User.apply("tom")
        println(tom.name)
    })
}

// 抽象クラス
// User
// - Japanese
// - American

abstract class User {
    def sayHi()
}

class Japanese extends User {
    def sayHi() = println("こんにちは")
}

class American extends User {
    def sayHi() = println("Hi!")
}

object MyApp {
    def main(args: Array[String]: Unit = {
        val aki = new Japanese
        val tom = new American
        aki.sayHi()
        tom.sayHi()
    })
}

// トレイトで機能を合成
// trait
trait Printable {
    def print() = println("now printing ...")
    def getInfo() = println("Print!")
}

trait Sharable {
    def share() = println("now sharing")
    def getInfo() = println("Share!")
}

class User extends Printable with Sharable {
    override def getInfo() = super[Printable].getInfo()
}
// class User extends OtherClass with Printable

object MyApp {
    def main(args: Array[String]: Unit = {
        val user = new User
        user.print()
        user.share()
        user.getInfo
    })
}

// trait 別の方
trait Common {
    def getInfo()
}
trait Printable  extends Common {
    def print() = println("now printing ...")
    override def getInfo() = println("Print!")
}

trait Sharable extends Common {
    def share() = println("now sharing")
    override def getInfo() = println("Share!")
}

class User extends Printable with Sharable

object MyApp {
    def main(args: Array[String]: Unit = {
        val user = new User
        user.getInfo
    })
}

// 型パラメータ
class MyInt {
    def getThree(i: Int): Unit = println(s"$i $i $i")
}

class MyDate[T] {
    def getThree(i: T): Unit = println(s"$i $i $i")
}

object MyApp {
    def main(args: Array[String]: Unit = {
        val mi = new MyInt
        mi.getThree(3)

        val i = new MyDate[Int]
        i.getThree(3)

        val s = new MyDate[String]
        s.getThree("itachi")
    })
}

//  関数オブジェクト
object MyApp {
    // method
    def multi(a: Int, b: Int) = a * b
    // 関数オブジェクト
    // val multFunc = (Int, Int) => (a: Int, b: Int) => a * b
    // val multFunc = (a: Int, b: Int) => a * b
    val multFunc = (_: Int) * (_: Int)

    def main(args: Array[String]: Unit = {
        println(multFunc(9,3))
    })
}

//  関数をカリー化
object MyApp {
    def main(args: Array[String]: Unit = {
        val multFunc = (a: Int, b: Int) => a * b
        val multFuncCurried = (a: Int) => ( (b: Int) => a * b)
        println(multFunc(9,3))
        println(multFuncCurried(3)(4))

        val double = multFuncCurried(3)
        val tripple = multFuncCurried(2)
        println(double(3)) // 9
        println(double(4)) // 8
    })
}

// 部分適用について理解しよう
object MyApp {
    def msg(from: String, to: String) = s"($from -> $to): $text"
    def main(args: Array[String]: Unit = {
        val msgToA = msg(_:String, "A", _: String)

        println(msgToA("B", "OK"))
        println(msgToA("C", "OK O"))
        println(msgToA("D", "OK OK"))
    })
}


// tuple
object MyApp {
    def swap(a: Int, b: Int) = (b, a)
    def main(args: Array[String]: Unit = {
        // tuple
        val data = (12, "itachi", 34)
        println(data._1)
        println(data._2)
        println(data._3)

        val (x, y) = swap(23,43)
        println(x)
        println(y)
    })
}

// tuple
object MyApp {
    def main(args: Array[String]: Unit = {
        // Collection
        // - Seq: List
        // - Set
        // - Map
        val socres = List(24,54,67)
        val socres = List[Int](232,3232,4343)

        val scores = Nil
        val scores = 200 :: Nil
        val scores = 200 :: 3000 ::  400 :: Nil

        println(scores.length)
        println(scores.isEmpty)
        println(scores.head)
        println(scores.tail)
    })
}

// set
object MyApp {
    def main(args: Array[String]: Unit = {
        val answers = Set(2,3,4,5)
        println(answers)
        println(answers.contains(3))
        println(answers(3))

        val set1 = Set(1,3,5,8)
        val set2 = Set(3,4,8,9)
        println(set1 & set2) // intersect
        println(set1 | set2) // union
        println(set1 &~ set2) // diff
    })
}

// map
object MyApp {
    def main(args: Array[String]: Unit = {
        // - Map:  key -> value
        val sales = Map("itachi" -> 200, "utachi" -> 232)
        println(sales("itachi"))
        println(sales.contains("test")) // false
        println(sales.getOrElse("test", -1)) // -1
    })
}

// Mutable
// import scala.Collection.mutable.map
import scala.Collection.mutable.{ Map => Mutable }
object MyApp {
    def main(args: Array[String]: Unit = {
        // Immutable
        val socres = Map("itachi" -> 30, "test" -> 42)
        socres.updated("itachi", 40)

        // Mutable
        val socres = MutableMap("itachi" -> 30, "test" -> 42)
        scores("itachi") = 60
    })
}

// map､filter､foreach
object MyApp {
    def main(args: Array[String]: Unit = {
        val prices = List(43.2, 32.5)

        prices.map((n: double) => n * 1.08)
        prices.map(n => n * 1.08)
        rices.map(_ * 1.08).filter(_> 50).foreach(println)
    })
}

// case class: immutable
// パターンマッチング

case class Point(x: Int, y: Int)
object MyApp {
    def main(args: Array[String]: Unit = {
        val points = new List(
            Point(3,4)
            Point(6,7)
        )

        points.foreach(_match {
            case Point(0, 0) => println("origin!")
            case Point(3, _) => println("origin!")
            case Point(x, y) => println(s"$x:$y")
        })
    })
}

// Option型
object MyApp {
    def main(args: Array[String]: Unit = {
        // Error
        // Option
        // - Some
        // - None
        val socres = Map("itachi" -> 50, "utachi" -> 5)
        println(scores("test")) // getOrElse, contains

        socres.get("test") match {
            case Some(v) => println(v)
            case None => println("key not found")
        }
    })
}

// Either型でエラー処理
object MyApp {

    // Error
    // Either
    // - Right
    // - Left
    def div(a: Int, b: Int): Either[String, Int] = {
        if (b == 0 ) Left("zero div error!")
        else Right(a/b)
    }

    def main(args: Array[String]: Unit = {
        div(10, 0) match {
            case Right(v) => println(v)
            case Lest(s) => println(s)
        }
    })
}