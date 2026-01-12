-- Users : id, email, pseudo, mot_de_passe (hashé !), date_inscription
-- Reviews : id, user_id, film_id (TMDb), note, commentaire, date
-- Watchlists : id, user_id, film_id, statut (à_voir/vu/en_cours)
-- Favorites : id, user_id, film_id

-- ------------------------------------

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) DEFAULT NULL,
  user_picture VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE groups (
  id INT NOT NULL AUTO_INCREMENT,
  group_name VARCHAR(50) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE user_groups (
  user_id INT NOT NULL,
  group_id INT NOT NULL,
  joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, group_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE
);

CREATE TABLE friends (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  friend_id INT NOT NULL,
  status ENUM('en attente', 'accepté', 'refusé') NOT NULL DEFAULT 'en attente',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (friend_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ------------------------------------

CREATE TABLE watchlists(
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  mov_id INT NOT NULL,
  media_type ENUM('movie','tv','episode') NOT NULL,
  added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('à_voir','vu','en_cours') NOT NULL DEFAULT 'à_voir',
  PRIMARY KEY (id),
  UNIQUE(user_id, mov_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE favorites (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  mov_id INT NOT NULL,
  media_type ENUM('movie','tv','episode') NOT NULL,
  added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE(user_id, mov_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE notes (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  mov_id INT NOT NULL,
  media_type ENUM('movie','tv','episode') NOT NULL,
  note DECIMAL(2,1) NOT NULL CHECK(note >=0 AND note <=5),
  noted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE(user_id, mov_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  mov_id INT NOT NULL,
  media_type ENUM('movie','tv','episode') NOT NULL,
  comment TEXT NOT NULL,
  comments_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ------------------------------------

CREATE TABLE `logs_connections` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `login_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `logout_time` TIMESTAMP NULL DEFAULT NULL,
  `ip_address` VARCHAR(45) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE `logs_actions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `action` TEXT NOT NULL,
  `action_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
