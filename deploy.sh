#!/bin/bash

files=('about/' 'apply/' 'css/' 'images/' 'index.html' 'js/' 'shop/')
for var in ${files[@]};do
   scp -r $var root@123.206.194.114:/var/www/html/sirens_web/
done
`../sirens_web_landing/upload2sima.sh`
#echo ''
#allfiles=(`ls`)
#for var1 in ${allfiles[@]};do
 #  echo $var1
#done
