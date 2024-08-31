#!/bin/bash
printf "====================================================\n"
printf "   Synchronization with rsync $(date +'%T')\n"
printf "====================================================\n"

key='jS(3ub#Vv2DYRG]f'
ip_live="45.76.185.99"
DOMAIN_NAME="minhnhut-portfolio"

options='sshpass -p $key rsync -avzhe ssh -e "ssh -o StrictHostKeyChecking=no" --progress --timeout=5'

eval $options   --exclude '.git' "${PWD}"/ root@$ip_live:/home/anh-bon/$DOMAIN_NAME/
 

printf "====================================================\n"
printf "     Done with rsync $(date +'%T')\n"
printf "====================================================\n"
