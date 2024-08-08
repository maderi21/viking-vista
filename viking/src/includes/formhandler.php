<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $signupEmail = htmlspecialchars($_POST["signup_email"]);
    $signupPassword = htmlspecialchars($_POST["signup_password"]);
    $loginEmail = htmlspecialchars($_POST["login_email"]);
    $loginPassword = htmlspecialchars($_POST["login_password"]);

    if (empty($signupEmail) || empty($signupPassword)) {
        header("Location: ../App.vue?error=signup");
        exit();
    }
    if (empty($loginEmail) || empty($loginPassword)) {
        header("Location: ../App.vue?error=login");
        exit();
    }
    header("Location: ../App.vue?success=true");
    exit();
}

