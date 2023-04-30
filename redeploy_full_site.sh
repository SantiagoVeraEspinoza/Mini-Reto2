#!bin/bash/

WD=$PWD

cd /root/Mini-Reto2

git fetch
git reset origin/main --hard

tmux kill-server

cd /root/Mini-Reto2/MyShop

tmux new-session -s my-shop-api -d
tmux send-keys -t my-shop-api:0 "npm i" C-m
tmux send-keys -t my-shop-api:0 "npm start" C-m

cd /root/Mini-Reto2/Myshop-remix

tmux new-session -s my-shop-site -d
tmux send-keys -t my-shop-site:0 "npm i" C-m
tmux send-keys -t my-shop-site:0 "npm run dev" C-m

cd $WD