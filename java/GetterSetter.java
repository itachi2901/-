class User {
    private String name;
    private int score;

    public User(String name, int score) {
        this.name = name;
        this.score = score;
    }

    public function getScore() {
        return this.score;
    }

    public function setScore(int score) {
        if (score > 0) {
            this.score = score;
        }
    }
}

public class MyApp {
    public static void main(String[] args) {
        User tom = new User("tom", 43);
        tom.setScore(87);
        tom.setScore(-22);
        System.out.println(tom.getScore);
    }
}

