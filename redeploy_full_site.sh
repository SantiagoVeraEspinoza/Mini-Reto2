#!bin/bash/

WD=$PWD

cd /root/Mini-Reto2

tmux kill-server
source api_redeploy.sh
source site_redeploy.sh

cd $WD