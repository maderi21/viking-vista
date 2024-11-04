<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $signupEmail = htmlspecialchars($_POST["signup_email"] ?? '');
    $signupPassword = htmlspecialchars($_POST["signup_password"] ?? '');
    $loginEmail = htmlspecialchars($_POST["login_email"] ?? '');
    $loginPassword = htmlspecialchars($_POST["login_password"] ?? '');

    if (!empty($signupEmail) && !empty($signupPassword)) {
        echo json_encode(["status" => "success", "message" => "Signed up successfully"]);
    } elseif (!empty($loginEmail) && !empty($loginPassword)) {
        echo json_encode(["status" => "success", "message" => "Logged in successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid input"]);
    }
}
?>