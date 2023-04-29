#!bin/bash/

WD=$PWD

cd /root/Mini-Reto2/Myshop-remix

tmux new-session -s my-shop-site -d
tmux send-keys -t my-shop-site:0 "npm i" C-m
tmux send-keys -t my-shop-site:0 "npm run dev" C-m

cd $WD