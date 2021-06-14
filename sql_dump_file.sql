CREATE TABLE `users` (
  `email` varchar(16) NOT NULL,
  `pass` varchar(16) NOT NULL,
  `name` varchar(16) NOT NULL,
  `address` varchar(16) NOT NULL,
  `phone` varchar(16) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `happyhouse`.`users`
(`email`,
`pass`,
`name`,
`address`,
`phone`)
VALUES
("ssafy@ssafy.com",
"ssafy1234",
"김싸피",
"주소",
"010");

