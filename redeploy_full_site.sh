#!bin/bash/

WD=$PWD

cd /root/Mini-Reto2

git fetch
git reset origin/main --hard

tmux kill-server

tmux new-session -s my-shop-api -d
tmux send-keys -t my-shop-api:1 "cd /MyShop" C-m
tmux send-keys -t my-shop-api:1 "npm i" C-m
tmux send-keys -t my-shop-api:1 "npm start" C-m

tmux new-session -s my-shop-site -d
tmux send-keys -t my-shop-api:1 "cd /Myshop-remix" C-m
tmux send-keys -t my-shop-site:1 "npm i" C-m
tmux send-keys -t my-shop-site:1 "npm run dev" C-m

cd $WD