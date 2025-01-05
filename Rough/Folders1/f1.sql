SELECT 
    COUNT(DISTINCT(`painter_order_request_details`.`user_id`)) AS `ct`, 
    DATE_FORMAT(FROM_UNIXTIME(`painter_order_request_details`.`creation_date`), '%M') AS `month` 
FROM `pt7e_user_profile` AS `endUser` 
INNER JOIN `pt7e_users` AS `user` 
    ON `endUser`.`user_id` = `user`.`id` 
    AND `user`.`is_test_user` = '0' 
LEFT OUTER JOIN `pt7e_state_master` AS `state` 
    ON `endUser`.`state_id` = `state`.`id` 
INNER JOIN `pt7e_users_kyc` AS `userkyc` 
    ON `endUser`.`user_id` = `userkyc`.`user_id` 
    AND `userkyc`.`status_id` = 2 
    AND `userkyc`.`asm_status_id` IS NULL 
INNER JOIN `pt7e_painter_order_detail` AS `painter_order_request_details` 
    ON `endUser`.`user_id` = `painter_order_request_details`.`user_id` 
    AND `painter_order_request_details`.`creation_date` 
        BETWEEN UNIX_TIMESTAMP(DATE_SUB(CURRENT_DATE(), INTERVAL 12 MONTH)) 
        AND UNIX_TIMESTAMP(CURRENT_DATE()) 
    AND `painter_order_request_details`.`status_id` NOT IN (126) 
GROUP BY DATE_FORMAT(FROM_UNIXTIME(`painter_order_request_details`.`creation_date`), '%Y-%m') 
ORDER BY DATE_FORMAT(FROM_UNIXTIME(`painter_order_request_details`.`creation_date`), '%Y-%m') 
DESC;


SELECT 
    COUNT(DISTINCT(`painter_order_request_details`.`user_id`)) AS `ct`, 
    DATE_FORMAT(FROM_UNIXTIME(`painter_order_request_details`.`creation_date`), '%M') AS `month` 
FROM `pt7e_user_profile` AS `endUser` 
INNER JOIN `pt7e_users` AS `user` 
    ON `endUser`.`user_id` = `user`.`id` 
    AND `user`.`is_test_user` = '0' 
LEFT OUTER JOIN `pt7e_state_master` AS `state` 
    ON `endUser`.`state_id` = `state`.`id` 
INNER JOIN `pt7e_users_kyc` AS `userkyc` 
    ON `endUser`.`user_id` = `userkyc`.`user_id` 
    AND `userkyc`.`asm_status_id` IS NULL 
INNER JOIN `pt7e_painter_order_detail` AS `painter_order_request_details` 
    ON `endUser`.`user_id` = `painter_order_request_details`.`user_id` 
    AND `painter_order_request_details`.`creation_date` 
        BETWEEN UNIX_TIMESTAMP(DATE_SUB(CURRENT_DATE(), INTERVAL 12 MONTH)) AND UNIX_TIMESTAMP(CURRENT_DATE()) 
        AND `painter_order_request_details`.`status_id` NOT IN (126) 
GROUP BY DATE_FORMAT(FROM_UNIXTIME(`painter_order_request_details`.`creation_date`), '%Y-%m') 
ORDER BY DATE_FORMAT(FROM_UNIXTIME(`painter_order_request_details`.`creation_date`), '%Y-%m') DESC LIMIT 12;


SELECT 
DATE_SUB(DATE_SUB(CURRENT_DATE(), INTERVAL 11 MONTH), INTERVAL DAY(CURRENT_DATE()) - 1 DAY);


SELECT COUNT(DISTINCT(`painter_order_request_details`.`user_id`)) AS `ct` FROM `pt7e_user_profile` AS `endUser` INNER JOIN `pt7e_users` AS `user` ON `endUser`.`user_id` = `user`.`id` AND `user`.`is_test_user` = '0' LEFT OUTER JOIN `pt7e_state_master` AS `state` ON `endUser`.`state_id` = `state`.`id` INNER JOIN `pt7e_users_kyc` AS `userkyc` ON `endUser`.`user_id` = `userkyc`.`user_id` AND `userkyc`.`status_id` = 3 AND `userkyc`.`asm_status_id` IS NULL INNER JOIN `pt7e_painter_order_detail` AS `painter_order_request_details` ON `endUser`.`user_id` = `painter_order_request_details`.`user_id` AND `painter_order_request_details`.`creation_date` BETWEEN '1682879400' AND '1685557799' AND `painter_order_request_details`.`status_id` NOT IN (126) LIMIT 1;

SELECT 
COUNT(DISTINCT(`painter_order_request_details`.`user_id`)) AS `ct`, 
DATE_FORMAT(FROM_UNIXTIME(`painter_order_request_details`.`creation_date`), '%M') AS `month` 
FROM `pt7e_user_profile` AS `endUser` 
INNER JOIN `pt7e_users` AS `user` ON `endUser`.`user_id` = `user`.`id` AND `user`.`is_test_user` = '0' 
LEFT OUTER JOIN `pt7e_state_master` AS `state` ON `endUser`.`state_id` = `state`.`id` 
INNER JOIN `pt7e_users_kyc` AS `userkyc` 
ON `endUser`.`user_id` = `userkyc`.`user_id` AND `userkyc`.`status_id` = 3 AND `userkyc`.`asm_status_id` IS NULL 
INNER JOIN `pt7e_painter_order_detail` AS `painter_order_request_details` ON `endUser`.`user_id` = `painter_order_request_details`.`user_id` 
AND `painter_order_request_details`.`creation_date` 
BETWEEN UNIX_TIMESTAMP(DATE_SUB(DATE_SUB(CURRENT_DATE(), INTERVAL 11 MONTH), INTERVAL DAY(CURRENT_DATE()) - 1 DAY)) AND UNIX_TIMESTAMP(CURRENT_DATE()) AND `painter_order_request_details`.`status_id` NOT IN (126) 
GROUP BY DATE_FORMAT(FROM_UNIXTIME(`painter_order_request_details`.`creation_date`), '%Y-%m') 
ORDER BY DATE_FORMAT(FROM_UNIXTIME(`painter_order_request_details`.`creation_date`), '%Y-%m') 
DESC LIMIT 12;