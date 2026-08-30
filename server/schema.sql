-- ============================================================
-- Kirti Rathore website - MySQL schema
-- Run: mysql -u root -p < server/schema.sql
-- ============================================================

CREATE DATABASE IF NOT EXISTS bjp
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE bjp;

CREATE TABLE IF NOT EXISTS users (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  username      VARCHAR(50)  NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- General page copy. Videos and gallery are deliberately normalized below.
CREATE TABLE IF NOT EXISTS settings (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `key`      VARCHAR(50) NOT NULL UNIQUE,
  `value`    JSON        NOT NULL,
  updated_at TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP
                    ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS videos (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  sort_order INT UNSIGNED NOT NULL DEFAULT 0,
  title      VARCHAR(255) NOT NULL,
  duration   VARCHAR(20)  NOT NULL DEFAULT '',
  views      VARCHAR(50)  NOT NULL DEFAULT '',
  thumb      TEXT         NOT NULL,
  badge      VARCHAR(50)  NULL,
  created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
                   ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_videos_sort (sort_order, id)
);

CREATE TABLE IF NOT EXISTS gallery_items (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  sort_order INT UNSIGNED NOT NULL DEFAULT 0,
  src        TEXT         NOT NULL,
  likes      VARCHAR(50)  NOT NULL DEFAULT '0',
  caption    VARCHAR(500) NOT NULL DEFAULT '',
  created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
                   ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_gallery_sort (sort_order, id)
);

INSERT INTO settings (`key`, `value`) VALUES (
  'site',
  JSON_OBJECT(
    'links', JSON_OBJECT(
      'instagram', 'https://www.instagram.com/kirti_rathore0105?igsi=dnBqdHJtb2Vub2xj',
      'youtube', 'https://youtube.com/@rathorevlogs_0148?si=TQyygLVjHIFP6Xen'
    ),
    'hero', JSON_OBJECT(
      'name', 'Kirti Rathore',
      'badge', 'Creator · Vlogger · @kirti_rathore0105',
      'tagline', 'Bringing everyday life to your screen - vlogs, reels & little moments of joy on Instagram and the Rathore Vlogs YouTube channel.',
      'youtubeCta', 'Watch on YouTube',
      'instagramCta', 'Follow on Instagram'
    ),
    'about', JSON_OBJECT(
      'bio', 'I''m a content creator and vlogger who believes the best stories are found in everyday moments. From morning chai to golden-hour walks, I film it all and share it with my favourite people: you.',
      'highlights', JSON_ARRAY(
        'Daily-life vlogs & travel diaries on YouTube',
        'Trending reels & shorts on Instagram',
        'Fun challenges, food & behind-the-scenes',
        'One happy place - Rathore family of fans'
      ),
      'stats', JSON_ARRAY(
        JSON_OBJECT('value', '2', 'label', 'Platforms I create on'),
        JSON_OBJECT('value', '500+', 'label', 'Reels, vlogs & shorts'),
        JSON_OBJECT('value', 'Unlimited', 'label', 'Smiles delivered')
      )
    ),
    'marquee', JSON_ARRAY('VLOGS', 'REELS', 'LIFESTYLE', 'FUN MOMENTS', 'DAILY VIBES', 'TRAVEL DIARIES', 'GOOD VIBES ONLY'),
    'pillars', JSON_ARRAY(
      JSON_OBJECT('icon', 'film', 'title', 'Daily Vlogs', 'text', 'Real, raw & full of laughter - a peep into everyday life on the Rathore Vlogs YouTube channel.'),
      JSON_OBJECT('icon', 'smartphone', 'title', 'Reels & Shorts', 'text', 'Snappy reels, trending sounds & smooth transitions - fresh drops on @kirti_rathore0105.'),
      JSON_OBJECT('icon', 'heart', 'title', 'Lifestyle & Fun', 'text', 'Fashion, food, travel and everything in between - little moments that make life special.')
    )
  )
) ON DUPLICATE KEY UPDATE `key` = `key`;

-- Seed normalized videos only when the table is empty.
SET @videos_empty := (SELECT COUNT(*) = 0 FROM videos);
INSERT INTO videos (sort_order, title, duration, views, thumb, badge)
SELECT seed.* FROM (
  SELECT 0, 'A Day In My Life - Morning To Night', '12:47', '42K views', 'https://images.pexels.com/photos/4152611/pexels-photo-4152611.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200', 'Most loved'
  UNION ALL SELECT 1, 'Behind The Scenes Of My Recent Shoot', '08:21', '31K views', 'https://images.pexels.com/photos/7964644/pexels-photo-7964644.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200', NULL
  UNION ALL SELECT 2, 'Cooking With Me - Easy & Tasty Recipe', '15:03', '58K views', 'https://images.pexels.com/photos/4152606/pexels-photo-4152606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200', 'New'
  UNION ALL SELECT 3, 'Golden Hour Walk & Chit-Chat', '10:32', '27K views', 'https://images.pexels.com/photos/4152780/pexels-photo-4152780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200', NULL
) AS seed
WHERE @videos_empty;

-- Seed normalized gallery items only when the table is empty.
SET @gallery_empty := (SELECT COUNT(*) = 0 FROM gallery_items);
INSERT INTO gallery_items (sort_order, src, likes, caption)
SELECT seed.* FROM (
  SELECT 0, 'https://images.pexels.com/photos/38379425/pexels-photo-38379425.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800', '12.4K', 'Golden hour, every hour'
  UNION ALL SELECT 1, 'https://images.pexels.com/photos/13929970/pexels-photo-13929970.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800', '9.1K', 'Behind the scenes'
  UNION ALL SELECT 2, 'https://images.pexels.com/photos/37054323/pexels-photo-37054323.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800', '15.7K', 'Traditional vibes'
  UNION ALL SELECT 3, 'https://images.pexels.com/photos/35612741/pexels-photo-35612741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800', '8.8K', 'Nature walks & talks'
  UNION ALL SELECT 4, 'https://images.pexels.com/photos/38906582/pexels-photo-38906582.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800', '11.2K', 'Just me & the sun'
  UNION ALL SELECT 5, 'https://images.pexels.com/photos/34481843/pexels-photo-34481843.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800', '7.9K', 'River side memories'
) AS seed
WHERE @gallery_empty;