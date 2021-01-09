# Generate SSH Key

## list
ls -a -l ~/.ssh

## Generate
ssh-keygen -t rsa -b 4096 -C "cbaltingok@gmail.com"

## Start
eval "$(ssh-agent -s)"

## Add
ssh-add -K ~/.ssh/id_rsa