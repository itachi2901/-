<?php

define('DB_DATABASE', 'test');
define('DB_USERNAME', 'db_user');
define('DB_PASSWORD', 'dhsn7362');
define('PDO_DSN', 'mysql:dbhost=localhost;dbname='.DB_DATABASE);

class User {
    public function show() {
        echo "$this->name";
    }
}

try {
    $db = new PDO(PDO_DSN, DB_USERNAME, DB_PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    /**
     * (1) exec() 結果を返さない、安全なSQL
     * (2) query()  結果を返す、安全何回も実行されないSQL
     * (3) prepare() 結果を返す、安全対策が必要
     */

    $stmt = $db->prepare("insert into users (name, score) values (?, ?)");
    $stmt->execute(['itachi', 33]);


    $stmt = $db->prepare("insert into users (name, score) values (:name, :score)");
    $stmt->execute([':name' => 'itachi', ':score' => 33]);

    // bindValue() 値をbind
    $stmt = $db->prepare("insert into users (name, score) values (?, ?)");
    $name = 'itachi';
    $stmt->bindValue(1, $name, PDO::PARAM_STR);
//    $stmt->bindValue(1, ':name', PDO::PARAM_STR);
    $score = 23;
    $stmt->bindValue(2, $score, PDO::PARAM_INT);
    $stmt->execute();

    // bindParam() 変装を参考をbind
    $stmt = $db->prepare("insert into users (name, score) values (?, ?)");
    $stmt->bindValue(1, $name, PDO::PARAM_STR);
    $stmt->bindParam(2, $score, PDO::PARAM_INT);
    $score = 43;
    $stmt->execute();

    $score = 433;
    $stmt->execute();

    // select all
    $stmt = $db->query("select * from users");
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($users as $user) {
        echo $user;
    }

    //
    $stmt = $db->prepare("select * from users where score > ?");
    $stmt->execute([40]);
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($users as $user) {
        echo $user;
    }

    // PDO::FETCH_CLASS
    $stmt = $db->query("select * from users");
    $users = $stmt->fetchAll(PDO::FETCH_CLASS, 'User');

    foreach ($users as $user) {
        $user->show();
    }

    // update
    $stmt = $db->prepare("update users set score = :score where name = :name");
    $stmt->execute([
       ':score' => 100,
       ':name' => 'tagu'
    ]);

    // トランザクション
    $db->beginTransaction();
    $db->exec("SQL");
    $db->exec("SQL");
    $db->commit();

} catch (PDOException $e) {
    $db->rollBack();
    echo $e->getMessage();
    exit();
}