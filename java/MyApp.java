public class MyApp {
    public static void main(String[] args) {

        // 文字
        char a = 'a';

        // 整数
        int x = 10;
        long y = 4444444L;

        // float double
        double d = 23.43434
        float f = 34,33F;

        // 論理値
        boolean flag = true;

        // 変数
        // 型 変数名
        String msg = "hello";
        System.out.println(msg);

        // 演算
        // ++, -- , % , /
        int i;

        // データ型の変換
        double d = 44343.4343;
        int i = (int)d;
        System.out.println(i);

        // if
        // > <= >= == !==
        int score = 43;
        if (score > 80) {
            System.out.println("Great!");
        } else {
            System.out.println("so so ...");
        }

        String msg = score > 50 ? "Great!" : "soo oso!";

        // switch
        String signal = "red";
        switch (signal) {
            case "red":
                System.out.println("Stop");
                break;
            case "blue":
                System.out.println("Go");
                break;
            case "yellow":
                System.out.println("caution!");
                break;
            default:
                System.out.println("wrong!");
                break;
        }

        // while
        int i = 0;
        while(i < 10) {
            System.out.println(i);
            i++;
        }

        // for
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
            // break
            // continue
        }

        // 配列
        sales = new int[3];
        sales[0] = 100;
        sales[1] = 200;
        sales[2] = 300;

        int[] sales;
        sales = new int[] {100, 200, 300}

        //
        int[] sales = {3,4,5};
        for(int i = 0; i < 3; i++) {
            System.out.println(sales[i]);
        }

        for(int sale : sales) {
            System.out.println(sale);
        }

        //
        int[] a = {3,4,5};
        int[] b = a;
        b[1] = 4;
        System.out.println(a[1]);
        System.out.println(b1]);

        //
        sayHi("tom");
        String name = sayHi("tom");
        System.out.println(name);
    }

    // メソッド
    // void
    // public static void sayHi(String name) {
    public static String sayHi(String name) {
        // System.out.println("hi! " + name);
        return "hi! " + name;
    }

    // メソッドをオーバーロード
    public static String sayHi(String name) {
        int x = 10;
        System.out.println("hi! " + name);
    }

    // overload
    public static String sayHi() {
        System.out.println("hi Nobody!");
    }

    public static void main(String[] args) {
        sayHi();
        sayHi("Tom"); // 引数
    }

    // class
    User tom;
    tom = new User("Tom"); // install
    System.out.println(tom.name);
    tom.sayHi();

    // クラスを継承
    AdminUser bod;
    bod = new AdminUser("bod"); // install
    System.out.println(bod.name);
    bod.sayHello();
}

class User {
    String name; // フイールド

    // コンストラクタ
    User(String name) {
        this.name = name;
    }

    User() {
        this.name = "Me!";
        // this("Me!");
    }

    void sayHi() {
        System.out.println("Hi!");
    }
}

// クラスを継承
class AdminUser extends User {
    AdminUser(String name) {
        super(name);
    }

    void sayHello() {
        System.out.println("Hello!");
    }

    // override
    @override // function name correct ?
    void sayHello() {
        System.out.println("[Admin] Hello!");
    }
}


// static
class User {
    private String name;
    private static int count = 0;

    public User(String name) {
        this.name = name;
        User.count++;
    }

    public static void getInfo() {
        System.out.println("Static");
    }
}

public function MyAppStatic {
    public static void main(String[] args) {
        User.getInfo();
        User tom = new User("Tom"); // install
        User.getInfo();
    }
}

// イニシャライザ
class User {
    private String name;
    private static int count;
    static {
        User.count = 0;
        System.out.println("Static init");
    }

    {
        System.out.println("Instance init");
    }

    public User(String name) {
        this.name = name;
        User.count++;
        System.out.println("Constructor init");
    }

    public static void getInfo() {
        System.out.println("Static");
    }
}

public function MyAppStatic {
    public static void main(String[] args) {
        User.getInfo();
        User tom = new User("Tom"); // install
        User.getInfo();
    }
}

// final: 変数が変更できない
final class User {
    protected String name;
    private static final double VERSION = 1.1
}

// 抽象クラス
abstract class User {
    public abstract void sayHi(); //
}

class JapaneseUser extends User {
    @Override
    public void sayHi() {
        System.out.println("Hi!");
    }
}

// インターフェース
interface Printable {
    // 定数
    // 抽象クラス
    // default
    // static
    double VERSION = 2.1
    void print();
    public default void getInfo() {
        System.out.println("I/f ver.") + Printable.VERSION;
    }
}

class User implements Printable {
    @Override
    public void print() {
        System.out.println("Print user");
    }
}

// enum
enum Result {
    SUCCESS,
    ERROR
}

public function MyAppEnum {
    public static void main(String[] args) {
        Result res;
        res = Result.ERROR;
        switch (res) {
            case SUCCESS:
                System.out.println("SUCCESS");
                break;
            case SUCCESS:
                System.out.println("ERROR");
                break;
        }
    }
}

// 例外
class MyException extends Exception {
    public MyException (String s) {
        super(s);
    }
}
public function AddNumber {
    public static void div(int a, int b) {
        try {
            if (b < 0) {
                throw new MyException("not minus!");
            }
            System.out.println(a/b)l
        } catch (ArithmeticException e) {
            System.err.println(e.getMessage());
        } finally {
            System.out.println("end!");
        }
    }

    public static void main(String[] args) {
        div(3,9);
    }
}

// ラッパークラス
/**
    Wrapper Class
    int -> Interger
    double -> Double
 */

 public function Wrapper {
    public static void main(String[] args) {
        Integer i = new Integer(32);
        int n = i.intValue();

        Integer i = 49; // auto boxing
        i = null;
        int n = i; // auto unboxing

        System.out.println();
    }
}

// ジェネリクス (generics)
class MyInteger {
    public void getThree(int x) {
        System.out.println(x);
        System.out.println(x);
        System.out.println(x);
    }
}

class MyData<T> { // どんなデータも対応できる
    public void getThree(T x) {
        System.out.println(x);
        System.out.println(x);
        System.out.println(x);
    }
}

 public function Generics {
    public static void main(String[] args) {
        MyInteger mi = new MyInteger();
        mi.getThree(66);

        MyData<Integer> i = new MyApp<>();
        i.getThree(32);

        MyData<String> s = new MyApp<>();
        s.getThree("String!");
    }
}

// thread
class MyRunnable implements Runnable {
    @Override
    public void run() {

        for (int i = 0; i < 400; i++) {
            System.out.println('*');
        }
    }
}
public class MyApp {
    public static void main(String[] args) {
        MyRunnable r = new MyRunnable();

        Thread t = new Thread();
        t.start();

        for (int i = 0; i < 400; i++) {
            System.out.println('.');
        }
    }
}

// 無名クラス､ラムダ式
class MyRunnable implements Runnable { // 関数かたインターフェース
    @Override
    public void run() {

        for (int i = 0; i < 400; i++) {
            System.out.println('*');
        }
    }
}
public class MyApp {
    public static void main(String[] args) {
        MyRunnable r = new MyRunnable();

        // Thread t = new Thread();
        // t.start();
        // ラムダ式
        new Thread(() -> {
            for (int i = 0; i < 400; i++) {
                System.out.println('*');
            }
        }).start();

        for (int i = 0; i < 400; i++) {
            System.out.println('.');
        }
    }
}

// Stringクラス
public class MyApp {
    public static void main(String[] args) {
        String s = "adsda";
        System.out.println(s.length());
        System.out.println(s.substring(2,3));
        System.out.println(s.replaceAll("ab","AB"));

        String s1 = "ab";
        String s2 = "ab";

        if (s1.equals(s2)) {
            System.out.println("Ssame!");
        }

        String ss1 = new String("ab");
        String ss2 = new String("ab");

        if (ss1 = ss2) {
            // 入れない
            System.out.println("Same same");
        }
    }
}

// printfメソッド
public class Printf {
    public static void main(String[] args) {
        int score = 40;
        double height = 13.2;
        String name = "itachi";

        System.out.printf("name: %s, score: %d, height: %f ", name, score, height);
        System.out.printf("name: %-10s, score: %10d, height: %5.2f ", name, score, height);

        String s = String.format("name: %-10s, score: %10d, height: %5.2f ", name, score, height);
        System.out.println(s);
    }
}

// Math
import java.util.random;

public class Math {
    public static void main(String[] args) {
        double d = 13.2;
        String name = "itachi";
        System.out.println(Math.ceil(d));
        System.out.println(Math.floor(d));
        System.out.println(Math.round(d));

        Random r = new Random();
        System.out.println(r.nextDouble()); // 0 -> 1
        System.out.println(r.nextDouble(100)); // 0 -> 100
    }
}

// arrayList
import java.util.*;

public class Math {
    public static void main(String[] args) {
        // ArrayList
        // LinkedList x 検索　（遅い）　o 追加　削除（早い）
        List<Integer> sales = new ArrayList<>();
        sales.add(10);
        sales.add(20);
        sales.add(30);
        for (int i = 0; i< sales.size(); i ++) {
            System.out.println(sales.get(i));
        }

        // 変更
        sales.set(0, 100);
        for (Integer sale: sales) {
            System.out.println(sale);
        }
    }
}

// hashSet

public class HashSet {
    public static void main(String[] args) {
        // HashSet
        // TreeSet
        // LinkedHashSet
        HashSet<Integer> sales = new HashSet<>();
        Set<Integer> sales = new HashSet<>();
        sales.add(10);
        sales.add(20);
        sales.add(30);
        sales.add(10);
        System.out.println(sales.size());

        for (Integer sale: sales) {
            System.out.println(sale);
        }

        sales.remove(30);
        for (Integer sale: sales) {
            System.out.println(sale);
        }
    }
}

// hashmap
import java.util.*;

public class HashMap {
    public static void main(String[] args) {
        // HashMap key value
        // TreeMap
        // LinkedHashMap
        HashMap<String, Integer> sales = new HashMap<>();
        sales.put("tom", 10);
        sales.put("bod", 20);
        sales.put("steve", 110);

        System.out.println(sales.get("tom"));

        for(Map.Entry<String, Integer> sale: sales.entrySet()) {
            System.out.println(sele.getKey() + ":" + sale.getValue());
        }
    }
}

// stream Api
import java.util.*;

public class StreamAPI {
    public static void main(String[] args) {
        // Stream
        List<Integer> sales = new ArrayList<>(Arr)ays.asList(12,34,5,6,7,8);

        sales
            .stream()
            // 中間処理
            .filter(e -> e % 3 == 0) // 引数 -> 処理
            .map(e -> "(" + e + ")")
            // 終端処理
            .forEach(System.out::println);
    }
}

// local date time
import java.time.*;

public class StreamAPI {
    public static void main(String[] args) {
        LocalDateTime d = LocalDateTime.now();
        LocalDateTime d = LocalDateTime.of(2019,1,1,10,10,10);

        System.out.println(d.getYear());
    }
}
