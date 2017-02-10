<?php
require_once('GitHubHook.class.php');

// Initiate the GitHub Deployment Hook
$hook = new GitHubHook;

// Enable the debug log (sent to error_log)
$hook->enableDebug();

$hook->addBranch('staging', 'staging', '/var/www/intersections.io/staging');
$hook->addBranch('production', 'production', '/var/www/intersections.io/production');

// Deploy the commits
$hook->deploy();
