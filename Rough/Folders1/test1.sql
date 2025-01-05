SELECT 
    COUNT(`user_id`) AS `ct`, 
    DATE_FORMAT(FROM_UNIXTIME(`endUser`.`first_app_download_date`), '%M') AS `month` 
FROM `pt7e_user_profile` AS `endUser` 
INNER JOIN `pt7e_users` AS `user` 
    ON `endUser`.`user_id` = `user`.`id` AND `user`.`is_test_user` = '0' 
LEFT OUTER JOIN `pt7e_state_master` AS `state`  
    ON `endUser`.`state_id` = `state`.`id` 
WHERE (`endUser`.`first_app_download_date` IS NOT NULL) 
    AND `endUser`.`first_app_download_date` 
        BETWEEN UNIX_TIMESTAMP(DATE_SUB(DATE_SUB(CURRENT_DATE(), INTERVAL 11 MONTH), INTERVAL DAY(CURRENT_DATE()) - 1 DAY)) AND UNIX_TIMESTAMP(CURRENT_DATE()) 
        AND `endUser`.`app_version` IS NOT NULL GROUP BY DATE_FORMAT(FROM_UNIXTIME(`endUser`.`first_app_download_date`), '%Y-%m') 
ORDER BY DATE_FORMAT(FROM_UNIXTIME(`endUser`.`first_app_download_date`), '%Y-%m') 
DESC LIMIT 12;