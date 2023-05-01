#!bin/bash/

WD=$PWD

cd /root/Mini-Reto2/MyShop

tmux new-session -s my-shop-api -d
tmux send-keys -t my-shop-api:0 "npm i" C-m
tmux send-keys -t my-shop-api:0 "npm start" C-m

cd $WD