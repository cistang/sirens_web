#!/bin/bash

files=('css/' 'index.html' 'adminphp/' 'images/' 'js/')
for var in ${files[@]};do
   scp -r $var root@123.206.194.114:/var/www/html/sirens_web/landing/
done
#echo ''
#allfiles=(`ls`)
#for var1 in ${allfiles[@]};do
 #  echo $var1
#done