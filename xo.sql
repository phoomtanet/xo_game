

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";



CREATE TABLE `game_history` (
  `id` int(11) NOT NULL,
  `moves` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`moves`)),
  `matrixSize` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `game_history` (`id`, `moves`, `matrixSize`) VALUES
(1, '[{\"player\":\"X\",\"row\":0,\"col\":1},{\"player\":\"O\",\"row\":1,\"col\":2},{\"player\":\"X\",\"row\":1,\"col\":1}]', 4)

ALTER TABLE `game_history`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `game_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=157;
COMMIT;

